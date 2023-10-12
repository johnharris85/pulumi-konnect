// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Represents a consumer within a runtime group
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@johnharris85/konnect";
 * import * as konnect from "@pulumi/konnect";
 *
 * const runtimeGroup = konnect.getRuntimeGroup({
 *     name: "TestRuntimeGroup",
 * });
 * const example = new konnect.Consumer("example", {
 *     runtimeGroupId: runtimeGroup.then(runtimeGroup => runtimeGroup.id),
 *     username: "testuser",
 *     customId: "testcustom",
 * });
 * ```
 *
 * ## Import
 *
 * Consumers can be imported using a proper value of `id` as described above
 */
export class Consumer extends pulumi.CustomResource {
    /**
     * Get an existing Consumer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConsumerState, opts?: pulumi.CustomResourceOptions): Consumer {
        return new Consumer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'konnect:index/consumer:Consumer';

    /**
     * Returns true if the given object is an instance of Consumer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Consumer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Consumer.__pulumiType;
    }

    /**
     * **(String)** Id of the consumer alone
     */
    public /*out*/ readonly consumerId!: pulumi.Output<string>;
    /**
     * **(Optional, String)** Field for storing an existing unique ID for the Consumer.
     */
    public readonly customId!: pulumi.Output<string | undefined>;
    /**
     * **(Required, String)** The id of the runtime group.
     */
    public readonly runtimeGroupId!: pulumi.Output<string>;
    /**
     * **(Optional, String)** The unique username of the Consumer.
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a Consumer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsumerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConsumerArgs | ConsumerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConsumerState | undefined;
            resourceInputs["consumerId"] = state ? state.consumerId : undefined;
            resourceInputs["customId"] = state ? state.customId : undefined;
            resourceInputs["runtimeGroupId"] = state ? state.runtimeGroupId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as ConsumerArgs | undefined;
            if ((!args || args.runtimeGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runtimeGroupId'");
            }
            resourceInputs["customId"] = args ? args.customId : undefined;
            resourceInputs["runtimeGroupId"] = args ? args.runtimeGroupId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["consumerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Consumer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Consumer resources.
 */
export interface ConsumerState {
    /**
     * **(String)** Id of the consumer alone
     */
    consumerId?: pulumi.Input<string>;
    /**
     * **(Optional, String)** Field for storing an existing unique ID for the Consumer.
     */
    customId?: pulumi.Input<string>;
    /**
     * **(Required, String)** The id of the runtime group.
     */
    runtimeGroupId?: pulumi.Input<string>;
    /**
     * **(Optional, String)** The unique username of the Consumer.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Consumer resource.
 */
export interface ConsumerArgs {
    /**
     * **(Optional, String)** Field for storing an existing unique ID for the Consumer.
     */
    customId?: pulumi.Input<string>;
    /**
     * **(Required, String)** The id of the runtime group.
     */
    runtimeGroupId: pulumi.Input<string>;
    /**
     * **(Optional, String)** The unique username of the Consumer.
     */
    username?: pulumi.Input<string>;
}
