// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace johnharris85.Konnect.Outputs
{

    [OutputType]
    public sealed class RouteHeader
    {
        /// <summary>
        /// **(Required, String)** Name of header this route should require.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// **(Required, List of String)** Allowed values this header should equal.
        /// </summary>
        public readonly ImmutableArray<string> Values;

        [OutputConstructor]
        private RouteHeader(
            string name,

            ImmutableArray<string> values)
        {
            Name = name;
            Values = values;
        }
    }
}