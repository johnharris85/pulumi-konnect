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
    public static class GetRole
    {
        /// <summary>
        /// Represents a role
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
        ///     var example = Konnect.GetRole.Invoke(new()
        ///     {
        ///         DisplayName = "Admin",
        ///         EntityTypeDisplayName = "Runtime Groups",
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetRoleResult> InvokeAsync(GetRoleArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetRoleResult>("konnect:index/getRole:getRole", args ?? new GetRoleArgs(), options.WithDefaults());

        /// <summary>
        /// Represents a role
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
        ///     var example = Konnect.GetRole.Invoke(new()
        ///     {
        ///         DisplayName = "Admin",
        ///         EntityTypeDisplayName = "Runtime Groups",
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetRoleResult> Invoke(GetRoleInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetRoleResult>("konnect:index/getRole:getRole", args ?? new GetRoleInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetRoleArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// **(Required, String)** The display name of the Role. Uses equality.
        /// </summary>
        [Input("displayName", required: true)]
        public string DisplayName { get; set; } = null!;

        /// <summary>
        /// **(Required, String)** The display name of the role entity type. Must be `Runtime Groups` or `Services`
        /// </summary>
        [Input("entityTypeDisplayName", required: true)]
        public string EntityTypeDisplayName { get; set; } = null!;

        public GetRoleArgs()
        {
        }
        public static new GetRoleArgs Empty => new GetRoleArgs();
    }

    public sealed class GetRoleInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// **(Required, String)** The display name of the Role. Uses equality.
        /// </summary>
        [Input("displayName", required: true)]
        public Input<string> DisplayName { get; set; } = null!;

        /// <summary>
        /// **(Required, String)** The display name of the role entity type. Must be `Runtime Groups` or `Services`
        /// </summary>
        [Input("entityTypeDisplayName", required: true)]
        public Input<string> EntityTypeDisplayName { get; set; } = null!;

        public GetRoleInvokeArgs()
        {
        }
        public static new GetRoleInvokeArgs Empty => new GetRoleInvokeArgs();
    }


    [OutputType]
    public sealed class GetRoleResult
    {
        /// <summary>
        /// **(String)** The description of the role.
        /// </summary>
        public readonly string Description;
        public readonly string DisplayName;
        public readonly string EntityTypeDisplayName;
        /// <summary>
        /// **(String)** The name of the role entity type.
        /// </summary>
        public readonly string EntityTypeName;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// **(String)** The name of the role.
        /// </summary>
        public readonly string Name;

        [OutputConstructor]
        private GetRoleResult(
            string description,

            string displayName,

            string entityTypeDisplayName,

            string entityTypeName,

            string id,

            string name)
        {
            Description = description;
            DisplayName = displayName;
            EntityTypeDisplayName = entityTypeDisplayName;
            EntityTypeName = entityTypeName;
            Id = id;
            Name = name;
        }
    }
}
