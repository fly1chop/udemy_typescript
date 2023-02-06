//////////////////////////////////////////////
//////////////////////////////////////////////
// Interfaces & Generics
enum AutomobileTypes {
  car = 'car',
  bus = 'bus',
  van = 'van',
  truck = 'truck',
  bike = 'bike',
}

enum AutomobileBrands {
  ferrari = 'ferrari',
  honda = 'honda',
  bmw = 'bmw',
  toyota = 'toyota',
}

enum AutomobileColors {
  black = 'black',
  red = 'red',
  pink = 'pink',
  white = 'white',
  silver = 'silver',
}
interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = 'car';

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}
}

const ferrari: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.black, AutomobileColors.red],
  'This is a ferrari'
);

class Truck implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = 'truck';

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}
}

const honda: Truck = new Truck(
  AutomobileBrands.honda,
  [AutomobileColors.black, AutomobileColors.silver],
  'This is a honda truck'
);

console.log(honda);
// const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> =
//   {
//     type: AutomobileTypes.car,
//     brand: AutomobileBrands.ferrari,
//     colors: [AutomobileColors.black, AutomobileColors.red],
//     description: 'This is a Ferrari',
//   };

// const honda: Automobile<string, string, string> = {
//   type: 'car',
//   brand: 'honda',
//   colors: ['silver', 'pink'],
//   description: 'This is a Honda',
// };

//////////////////////////////////////////////
//////////////////////////////////////////////
// Inheriting Multiple Interfaces
enum Roles {
  admin = 'admin',
  author = 'author',
  editor = 'editor',
}

enum PermissionsList {
  read = 'read',
  write = 'write',
  execute = 'execute',
}

interface Role {
  role: Roles;
}

interface UserPermissions {
  permissions: PermissionsList[]; //an array of values from PermissionsList enum
}

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface AdminUser extends User, Role, UserPermissions {
  numOfUsersReporting: number;
}

const rob: AdminUser = {
  name: 'Rob',
  email: 'rob@email.com',
  phone: 1234456,
  gender: 'male',
  role: Roles.admin,
  permissions: [
    PermissionsList.execute,
    PermissionsList.read,
    PermissionsList.write,
  ],
  numOfUsersReporting: 4,
};

// console.log(rob);
