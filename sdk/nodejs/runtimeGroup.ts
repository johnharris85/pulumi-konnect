// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Represents a runtime group
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@johnharris85/konnect";
 *
 * const example = new konnect.RuntimeGroup("example", {description: "TestRuntimeGroup"});
 * ```
 *
 * ## Import
 *
 * Runtime groups can be imported using a proper value of `id` as described above
 */
export class RuntimeGroup extends pulumi.CustomResource {
    /**
     * Get an existing RuntimeGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuntimeGroupState, opts?: pulumi.CustomResourceOptions): RuntimeGroup {
        return new RuntimeGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'konnect:index/runtimeGroup:RuntimeGroup';

    /**
     * Returns true if the given object is an instance of RuntimeGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RuntimeGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RuntimeGroup.__pulumiType;
    }

    /**
     * **(String)** The cluster type of the runtime group.
     */
    public /*out*/ readonly clusterType!: pulumi.Output<string>;
    /**
     * **(String)** The control plane endpoint URL of the runtime group.
     */
    public /*out*/ readonly controlPlaneEndpoint!: pulumi.Output<string>;
    /**
     * **(Optional, String)** The description of the runtime group.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * **(Required, String)** The name of the runtime group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * **(String)** The telemetry endpoint URL of the runtime group.
     */
    public /*out*/ readonly telemetryEndpoint!: pulumi.Output<string>;

    /**
     * Create a RuntimeGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RuntimeGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RuntimeGroupArgs | RuntimeGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RuntimeGroupState | undefined;
            resourceInputs["clusterType"] = state ? state.clusterType : undefined;
            resourceInputs["controlPlaneEndpoint"] = state ? state.controlPlaneEndpoint : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["telemetryEndpoint"] = state ? state.telemetryEndpoint : undefined;
        } else {
            const args = argsOrState as RuntimeGroupArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["clusterType"] = undefined /*out*/;
            resourceInputs["controlPlaneEndpoint"] = undefined /*out*/;
            resourceInputs["telemetryEndpoint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RuntimeGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RuntimeGroup resources.
 */
export interface RuntimeGroupState {
    /**
     * **(String)** The cluster type of the runtime group.
     */
    clusterType?: pulumi.Input<string>;
    /**
     * **(String)** The control plane endpoint URL of the runtime group.
     */
    controlPlaneEndpoint?: pulumi.Input<string>;
    /**
     * **(Optional, String)** The description of the runtime group.
     */
    description?: pulumi.Input<string>;
    /**
     * **(Required, String)** The name of the runtime group.
     */
    name?: pulumi.Input<string>;
    /**
     * **(String)** The telemetry endpoint URL of the runtime group.
     */
    telemetryEndpoint?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RuntimeGroup resource.
 */
export interface RuntimeGroupArgs {
    /**
     * **(Optional, String)** The description of the runtime group.
     */
    description?: pulumi.Input<string>;
    /**
     * **(Required, String)** The name of the runtime group.
     */
    name?: pulumi.Input<string>;
}