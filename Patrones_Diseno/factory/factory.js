/**
 * How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their sub classes.
 *
 * Base product:
 *  - BaseCar
 *
 * 2. Implement concrete products sub classes that inherits/implements
 *  the base product class/interface.
 *
 * Concrete products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 3. Declare base factory class/interface that returns objects that match
 *  the base product, not the concrete ones.
 *
 * Base factory:
 *  - CarFactory
 *
 * 4. Implement concrete factories sub classes that inherits/implements
 *  the base factory class/interface. These classes will return concrete
 *  products in their factory method.
 *
 * Concrete factories:
 *  - MastodonCarFactory
 *  - RhinoCarFactory
 *
 */

// STEP 1
class BaseCar {
  showCost() {
    throw new Error("Method not implemented");
  }
}

// STEP 2

class MastodonCar extends BaseCar {
  showCost() {
    console.log("Mastodon Car Cost: 300,000 MXN");
  }
}

class RhinoCar extends BaseCar {
  showCost() {
    console.log("Rhino Car Cost: 100,000 MXN");
  }
}

// STEP 3
class CarFactory {
  makeCar() {
    throw new Error("Method not implemented");
  }
}

// STEP 4

class MastodonCarFactory extends CarFactory {
  makeCar() {
    return new MastodonCar();
  }
}

class RhinoCarFactory extends CarFactory {
  makeCar() {
    return new RhinoCar();
  }
}

function appFactory(factory) {
  const car = factory.makeCar();
  car.showCost();
}

// appFactory(new MastodonCarFactory());
// appFactory(new RhinoCarFactory());

function createFactory(type) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory,
  };

  const Factory = factories[type];

  return new Factory();
}

appFactory(createFactory("mastodon"));
appFactory(createFactory("rhino"));
