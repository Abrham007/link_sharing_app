import Principal "mo:base/Principal";

actor {
  public query({caller}) func greet(name : Text) : async Text {
    return "Hello, " # name # "Your PrincipalId is: " # Principal.toText(caller);
  };
};
