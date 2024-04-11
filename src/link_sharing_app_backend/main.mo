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
  type Links = {
    id: Nat;
    href: Text;
  };

  type UserProfile = {
    profile: {
      firstName: Text;
      laseName: Text;
      email: Text;
      avatar: [Nat8];
    };
    links: [Links];
  };

  var userList: List.List<Principal> = List.nil<Principal>();
  var users = HashMap.HashMap<Principal, UserProfile>(1, Principal.equal, Principal.hash);
  

  public query func hasAccount(userId: Principal) : async Bool {
    Debug.print(debug_show(userId));
    Debug.print(debug_show(userList));
    var isFound : Bool = List.some<Principal>(userList, func p {Principal.equal(userId, p)});
    return isFound
  };

  public func createUser(userId: Principal) : async Bool {
    Debug.print(debug_show(userId));
    Debug.print(debug_show(userList));
    userList := List.push<Principal>(userId, userList);
    Debug.print(debug_show(userList));
    return true
  };
};
