/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 2. Implement concrete products classes that inherits/implements
 *  base products classes/interfaces, the number of concrete prodcuts
 *  will depend on the number of families.
 *
 * Concrete products:
 *  - MastodonSedanCar
 *  - MastodonHatchbackCar
 *  - RhinoSedanCar
 *  - RhinoHatchbackCar
 *
 * 3. Declare abstract factory class/interface that declare creation
 *  methods for each base product. The return value could be the base
 *  products types or concrete products types.
 *
 * Abstract Factory:
 *   - CarFactory
 *      * createMastodonCar(): MastodonCar
 *      * createRhinoCar(): RhinoCar
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behavior and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - SedanCarFactory
 *  - HatchbackCarFactory
 *
 */

/** STEP 1 */

class MastodonCar {
  useGPS() {
    throw new Error("Method not implemented");
  }
}

class RhinoCar {
  useGPS() {
    throw new Error("Method not implemented");
  }
}

/** STEP 2 */

class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log("[SEDAN] Mastodon GPS");
  }
}

class MastodonHatchbackCar extends MastodonCar {
  useGPS() {
    console.log("[SEDAN] Mastodon GPS");
  }
}

class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log("[SEDAN] Rhino GPS");
  }
}

class RhinoHatchbackCar extends RhinoCar {
  useGPS() {
    console.log("[HATCHBACK] Rhino GPS");
  }
}

/** STEP 3 */

class CarAbstractFactor {
  createMastodon() {
    throw new Error("Method not implemented");
  }

  createRhino() {
    throw new Error("Method not implemented");
  }
}

/** STEP 4 */

class SedanCarFactory {
  createMastodon() {
    return new MastodonSedanCar();
  }

  createRhino() {
    return new RhinoSedanCar();
  }
}

class HatchbackCarFactory {
  createMastodon() {
    return new MastodonHatchbackCar();
  }

  createRhino() {
    return new RhinoHatchbackCar();
  }
}

function appCarFactory(factory) {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();
  rhino.useGPS();
}

appCarFactory(new HatchbackCarFactory());
appCarFactory(new SedanCarFactory());

function createFactory(type) {
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory,
  };

  const Factory = factories[type];
  return new Factory();
}

appCarFactory(createFactory("sedan"));
appCarFactory(createFactory("hatchback"));
