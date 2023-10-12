// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Represents the mappings between an external identity provider group and a Konnect team
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as konnect from "@johnharris85/konnect";
 *
 * const team = new konnect.Team("team", {description: "testing"});
 * const example = new konnect.TeamMappings("example", {mappings: [{
 *     group: "external IdP group",
 *     teamIds: [team.id],
 * }]});
 * ```
 *
 * ## Import
 *
 * Team mappings can be imported using a proper value of `id` as described above
 */
export class TeamMappings extends pulumi.CustomResource {
    /**
     * Get an existing TeamMappings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamMappingsState, opts?: pulumi.CustomResourceOptions): TeamMappings {
        return new TeamMappings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'konnect:index/teamMappings:TeamMappings';

    /**
     * Returns true if the given object is an instance of TeamMappings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamMappings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamMappings.__pulumiType;
    }

    /**
     * **(Optional, set{mapping})** Configuration block for a mapping.  Can be specified multiple times for each mapping.  Each block supports the fields documented below.
     */
    public readonly mappings!: pulumi.Output<outputs.TeamMappingsMapping[] | undefined>;

    /**
     * Create a TeamMappings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TeamMappingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamMappingsArgs | TeamMappingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamMappingsState | undefined;
            resourceInputs["mappings"] = state ? state.mappings : undefined;
        } else {
            const args = argsOrState as TeamMappingsArgs | undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamMappings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TeamMappings resources.
 */
export interface TeamMappingsState {
    /**
     * **(Optional, set{mapping})** Configuration block for a mapping.  Can be specified multiple times for each mapping.  Each block supports the fields documented below.
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.TeamMappingsMapping>[]>;
}

/**
 * The set of arguments for constructing a TeamMappings resource.
 */
export interface TeamMappingsArgs {
    /**
     * **(Optional, set{mapping})** Configuration block for a mapping.  Can be specified multiple times for each mapping.  Each block supports the fields documented below.
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.TeamMappingsMapping>[]>;
}
