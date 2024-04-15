import Principal "mo:base/Principal";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Nat8 "mo:base/Nat8";
import HashMap "mo:base/HashMap";



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

  var users: List.List<Principal> = List.nil<Principal>();
  var mapOfProfile = HashMap.HashMap<Principal, Profile>(1, Principal.equal, Principal.hash);
  var mapOfLinks = HashMap.HashMap<Principal, List.List<Link>>(1, Principal.equal, Principal.hash);
  

  public query func hasAccount(userId: Principal) : async Bool {
    var isFound : Bool = List.some<Principal>(users, func p {Principal.equal(userId, p)});
    return isFound
  };

  public func createUser(userId: Principal) : async Bool {
    users := List.push<Principal>(userId, users);
    return true
  };

  public func addLinks(userId: Principal, links: [Link]) : async Bool {
    var userLinks: List.List<Link> = switch (mapOfLinks.get(userId)) {
      case null List.nil<Link>();
      case (?result) result;
    };

    userLinks := List.fromArray(links);
    mapOfLinks.put(userId, userLinks);
    return true
  };

  public func addProfile(userId: Principal, profile: Profile) : async Bool {
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

    userProfile := profile;
    mapOfProfile.put(userId, userProfile);

    return true;
  };

  public func getUser(userId: Principal): async User {
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

  }
};
