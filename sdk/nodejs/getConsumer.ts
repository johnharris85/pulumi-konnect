// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Represents a consumer
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@pulumi/konnect";
 *
 * const runtimeGroup = konnect.getRuntimeGroup({
 *     name: "TestRuntimeGroup",
 * });
 * const example = runtimeGroup.then(runtimeGroup => konnect.getConsumer({
 *     runtimeGroupId: runtimeGroup.id,
 *     searchUsername: "Bob",
 * }));
 * ```
 */
export function getConsumer(args: GetConsumerArgs, opts?: pulumi.InvokeOptions): Promise<GetConsumerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("konnect:index/getConsumer:getConsumer", {
        "customId": args.customId,
        "runtimeGroupId": args.runtimeGroupId,
        "searchCustomId": args.searchCustomId,
        "searchUsername": args.searchUsername,
        "username": args.username,
    }, opts);
}

/**
 * A collection of arguments for invoking getConsumer.
 */
export interface GetConsumerArgs {
    /**
     * **(Optional, String)** The filter string to apply to the customId of the consumer. Uses equality.
     */
    customId?: string;
    /**
     * **(Required, String)** The id of the runtime group containing consumer
     */
    runtimeGroupId: string;
    /**
     * **(Optional, String)** The search string to apply to the customId of the consumer. Uses contains.
     */
    searchCustomId?: string;
    /**
     * **(Optional, String)** The search string to apply to the username of the consumer. Uses contains.
     */
    searchUsername?: string;
    /**
     * **(Optional, String)** The filter string to apply to the username of the consumer. Uses equality.
     */
    username?: string;
}

/**
 * A collection of values returned by getConsumer.
 */
export interface GetConsumerResult {
    /**
     * **(String)** Id of the consumer alone
     */
    readonly consumerId: string;
    readonly customId?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly runtimeGroupId: string;
    readonly searchCustomId?: string;
    readonly searchUsername?: string;
    readonly username?: string;
}
/**
 * Represents a consumer
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@pulumi/konnect";
 *
 * const runtimeGroup = konnect.getRuntimeGroup({
 *     name: "TestRuntimeGroup",
 * });
 * const example = runtimeGroup.then(runtimeGroup => konnect.getConsumer({
 *     runtimeGroupId: runtimeGroup.id,
 *     searchUsername: "Bob",
 * }));
 * ```
 */
export function getConsumerOutput(args: GetConsumerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsumerResult> {
    return pulumi.output(args).apply((a: any) => getConsumer(a, opts))
}

/**
 * A collection of arguments for invoking getConsumer.
 */
export interface GetConsumerOutputArgs {
    /**
     * **(Optional, String)** The filter string to apply to the customId of the consumer. Uses equality.
     */
    customId?: pulumi.Input<string>;
    /**
     * **(Required, String)** The id of the runtime group containing consumer
     */
    runtimeGroupId: pulumi.Input<string>;
    /**
     * **(Optional, String)** The search string to apply to the customId of the consumer. Uses contains.
     */
    searchCustomId?: pulumi.Input<string>;
    /**
     * **(Optional, String)** The search string to apply to the username of the consumer. Uses contains.
     */
    searchUsername?: pulumi.Input<string>;
    /**
     * **(Optional, String)** The filter string to apply to the username of the consumer. Uses equality.
     */
    username?: pulumi.Input<string>;
}