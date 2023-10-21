import helloEvans from "../utils/hello.evans.js";

it("Should say hello Evans",()=>{
    const helloString=helloEvans();
    console.log(helloString);

    expect(helloString).toBe("hello Evans");
})
