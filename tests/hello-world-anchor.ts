import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
// @ts-ignore
import {HelloWorldAnchor} from "../target/types/hello_world_anchor";

describe("hello-world-anchor", () => {
    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.AnchorProvider.env());

    const program = anchor.workspace.HelloWorldAnchor as Program<HelloWorldAnchor>;
});

