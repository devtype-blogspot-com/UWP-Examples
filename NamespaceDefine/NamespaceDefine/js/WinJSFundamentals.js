// Define the Namespace Developerpublish
WinJS.Namespace.define("DeveloperPublish");
// Utilities created in the DeveloperPublish Namespace
DeveloperPublish.Utilities = {
    DisplayMessage: function () {
        return "Message from DeveloperPublish Namespace";
    }
};

// Define the Namespace Apress and create the Utilities under it.
WinJS.Namespace.define("Apress",
 {
     Utilities: {
         DisplayMessage: function () {
             return "Message from Apress Namespace";
         }
     }
 });

console.log(DeveloperPublish.Utilities.DisplayMessage());
console.log(Apress.Utilities.DisplayMessage());

WinJS.Namespace.defineWithParent(Apress, "Books",
 {
     Utilities:
     {
         DisplayMessage: function () {
             return "Message from Apress.Books Namespace";
         }
     }
 }
);
console.log(Apress.Books.Utilities.DisplayMessage());