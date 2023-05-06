import * as konnect from "@pulumi/konnect";

const random = new konnect.Random("my-random", { length: 24 });

export const output = random.result;