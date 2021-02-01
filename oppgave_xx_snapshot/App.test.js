import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("Snapshot testing", () => {
  it("rendered app should match stored snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div>
        Snapshot test
        <span>
          hei hei hei
        </span>
      </div>
    `);
  });

  it("example on how to generate an inline snapshot", () => {
    const tree = renderer
      .create(<App message={"we're going to generate a new inline snapshot"} />)
      .toJSON();
    // uncomment the line below, then run the test - notice what happens after one test run
    //expect(tree).toMatchInlineSnapshot();
  });

  // here they can delete the inline-snapshot that's passed as a parameter, and then run the test
  it("snapshot should be kept up to date", () => {
    const tree = renderer
      .create(<App message={"the updated snapshot"} />)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div>
        Snapshot test
        <div>
          hei hei hei
        </div>
      </div>
    `);
  });

  it("snapshots can also be used to match object properties", () => {
    const user = {
      createdAt: new Date(328492800000),
      id: 8,
      name: "Steven Gerrard",
    };

    expect(user).toMatchInlineSnapshot();
  });

  it("some test where they need to match properties", () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: "Roberto Firmino",
    };

    // this will fail every time, they need to change to the other matcher below
    expect(user).toMatchInlineSnapshot(`
      Object {
        "createdAt": 2021-02-01T16:13:43.556Z,
        "id": 10,
        "name": "Roberto Firmino",
      }
    `);

    /*
    expect(user).toMatchInlineSnapshot(`
      Object {
        "createdAt": Any<Date>,
        "id": Any<Number>,
        "name": "Roberto Firmino",
      }
    `);
     */
  });
});
