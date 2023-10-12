// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Represents all nodes of a runtime group
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@pulumi/konnect";
 *
 * const runtimeGroup = konnect.getRuntimeGroup({
 *     name: "TestRuntimeGroup",
 * });
 * const example = runtimeGroup.then(runtimeGroup => konnect.getNodes({
 *     runtimeGroupId: runtimeGroup.id,
 * }));
 * ```
 */
export function getNodes(args: GetNodesArgs, opts?: pulumi.InvokeOptions): Promise<GetNodesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("konnect:index/getNodes:getNodes", {
        "runtimeGroupId": args.runtimeGroupId,
    }, opts);
}

/**
 * A collection of arguments for invoking getNodes.
 */
export interface GetNodesArgs {
    /**
     * **(Required, String)** The id of the parent runtime group.
     */
    runtimeGroupId: string;
}

/**
 * A collection of values returned by getNodes.
 */
export interface GetNodesResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * **(set{node})** Set of nodes belonging to runtime group
     */
    readonly nodes: outputs.GetNodesNode[];
    readonly runtimeGroupId: string;
}
/**
 * Represents all nodes of a runtime group
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@pulumi/konnect";
 *
 * const runtimeGroup = konnect.getRuntimeGroup({
 *     name: "TestRuntimeGroup",
 * });
 * const example = runtimeGroup.then(runtimeGroup => konnect.getNodes({
 *     runtimeGroupId: runtimeGroup.id,
 * }));
 * ```
 */
export function getNodesOutput(args: GetNodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNodesResult> {
    return pulumi.output(args).apply((a: any) => getNodes(a, opts))
}

/**
 * A collection of arguments for invoking getNodes.
 */
export interface GetNodesOutputArgs {
    /**
     * **(Required, String)** The id of the parent runtime group.
     */
    runtimeGroupId: pulumi.Input<string>;
}
