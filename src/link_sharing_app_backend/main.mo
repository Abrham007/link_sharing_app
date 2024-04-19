import Principal "mo:base/Principal";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Nat8 "mo:base/Nat8";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";



actor {
  type Link = {
    id: Text;
    href: Text;
  };

  type Profile = {
    firstName: Text;
    lastName: Text;
    email: Text;
    profilePic: [Nat8];
  };

  type User = {
    profile: Profile;
    links: [Link];
  };

  private stable var users: List.List<Principal> = List.nil<Principal>();

  private var mapOfProfile = HashMap.HashMap<Principal, Profile>(1, Principal.equal, Principal.hash);
  private var mapOfLinks = HashMap.HashMap<Principal, List.List<Link>>(1, Principal.equal, Principal.hash);

  stable var stableProfile: [(Principal, Profile)] = [];
  stable var stableLinks: [(Principal, List.List<Link>)] = [];

  public query func hasAccount(userId: Principal) : async Bool {
    var isFound : Bool = List.some<Principal>(users, func p {Principal.equal(userId, p)});
    return isFound
  };

  public func createUser(userId: Principal) : async Bool {
    var isFound : Bool = List.some<Principal>(users, func p {Principal.equal(userId, p)});
    if (isFound) {
      return false
    }else {
      users := List.push<Principal>(userId, users);
      return true
    }
    
  };

  public func addLinks(userId: Principal, links: [Link]) : async Bool {
    var userLinks = List.fromArray(links);
    mapOfLinks.put(userId, userLinks);
    return true
  };

  public func addProfile(userId: Principal, profile: Profile) : async Bool {
    mapOfProfile.put(userId, profile);
    return true;
  };

  public query func getUser(userId: Principal): async User {
    var userLinks: List.List<Link> = switch (mapOfLinks.get(userId)) {
      case null List.nil<Link>();
      case (?result) result;
    };

    var newProfile: Profile = {
      firstName = "";
      lastName = "";
      email = "";
      profilePic = [];
    };
    var userProfile: Profile = switch (mapOfProfile.get(userId)) {
      case null newProfile;
      case (?result) result;
    };

    var user: User = {
      profile = userProfile;
      links = List.toArray(userLinks)
    };

    return user
  };

  system func preupgrade() {
    stableProfile := Iter.toArray(mapOfProfile.entries());
    stableLinks := Iter.toArray(mapOfLinks.entries());
  };

  system func postupgrade() {
    mapOfProfile := HashMap.fromIter<Principal, Profile>(stableProfile.vals(), 1, Principal.equal, Principal.hash);
    mapOfLinks := HashMap.fromIter<Principal, List.List<Link>>(stableLinks.vals(), 1, Principal.equal, Principal.hash);
    stableProfile := [];
    stableLinks := [];
  };
};
