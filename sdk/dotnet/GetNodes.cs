// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace johnharris85.Konnect
{
    public static class GetNodes
    {
        /// <summary>
        /// Represents all nodes of a runtime group
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Konnect = Pulumi.Konnect;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var runtimeGroup = Konnect.GetRuntimeGroup.Invoke(new()
        ///     {
        ///         Name = "TestRuntimeGroup",
        ///     });
        /// 
        ///     var example = Konnect.GetNodes.Invoke(new()
        ///     {
        ///         RuntimeGroupId = runtimeGroup.Apply(getRuntimeGroupResult =&gt; getRuntimeGroupResult.Id),
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetNodesResult> InvokeAsync(GetNodesArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetNodesResult>("konnect:index/getNodes:getNodes", args ?? new GetNodesArgs(), options.WithDefaults());

        /// <summary>
        /// Represents all nodes of a runtime group
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Konnect = Pulumi.Konnect;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var runtimeGroup = Konnect.GetRuntimeGroup.Invoke(new()
        ///     {
        ///         Name = "TestRuntimeGroup",
        ///     });
        /// 
        ///     var example = Konnect.GetNodes.Invoke(new()
        ///     {
        ///         RuntimeGroupId = runtimeGroup.Apply(getRuntimeGroupResult =&gt; getRuntimeGroupResult.Id),
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetNodesResult> Invoke(GetNodesInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetNodesResult>("konnect:index/getNodes:getNodes", args ?? new GetNodesInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetNodesArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// **(Required, String)** The id of the parent runtime group.
        /// </summary>
        [Input("runtimeGroupId", required: true)]
        public string RuntimeGroupId { get; set; } = null!;

        public GetNodesArgs()
        {
        }
        public static new GetNodesArgs Empty => new GetNodesArgs();
    }

    public sealed class GetNodesInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// **(Required, String)** The id of the parent runtime group.
        /// </summary>
        [Input("runtimeGroupId", required: true)]
        public Input<string> RuntimeGroupId { get; set; } = null!;

        public GetNodesInvokeArgs()
        {
        }
        public static new GetNodesInvokeArgs Empty => new GetNodesInvokeArgs();
    }


    [OutputType]
    public sealed class GetNodesResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// **(set{node})** Set of nodes belonging to runtime group
        /// </summary>
        public readonly ImmutableArray<Outputs.GetNodesNodeResult> Nodes;
        public readonly string RuntimeGroupId;

        [OutputConstructor]
        private GetNodesResult(
            string id,

            ImmutableArray<Outputs.GetNodesNodeResult> nodes,

            string runtimeGroupId)
        {
            Id = id;
            Nodes = nodes;
            RuntimeGroupId = runtimeGroupId;
        }
    }
}