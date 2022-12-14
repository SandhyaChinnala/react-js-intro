const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Sandhya", lastName: "Chinnala" };
const className = "greeting";
const element = (
  <div>
    <h1 className={className}> Hello, {fullName(user)}!</h1>
    <p>Good to see you here</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
