// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package konnect

import (
	"context"
	"reflect"

	"github.com/johnharris85/pulumi-konnect/sdk/go/konnect/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumix"
)

// Represents all nodes of a runtime group
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/johnharris85/pulumi-konnect/sdk/go/konnect"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			runtimeGroup, err := konnect.LookupRuntimeGroup(ctx, &konnect.LookupRuntimeGroupArgs{
//				Name: pulumi.StringRef("TestRuntimeGroup"),
//			}, nil)
//			if err != nil {
//				return err
//			}
//			_, err = konnect.GetNodes(ctx, &konnect.GetNodesArgs{
//				RuntimeGroupId: runtimeGroup.Id,
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func GetNodes(ctx *pulumi.Context, args *GetNodesArgs, opts ...pulumi.InvokeOption) (*GetNodesResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv GetNodesResult
	err := ctx.Invoke("konnect:index/getNodes:getNodes", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getNodes.
type GetNodesArgs struct {
	// **(Required, String)** The id of the parent runtime group.
	RuntimeGroupId string `pulumi:"runtimeGroupId"`
}

// A collection of values returned by getNodes.
type GetNodesResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// **(set{node})** Set of nodes belonging to runtime group
	Nodes          []GetNodesNode `pulumi:"nodes"`
	RuntimeGroupId string         `pulumi:"runtimeGroupId"`
}

func GetNodesOutput(ctx *pulumi.Context, args GetNodesOutputArgs, opts ...pulumi.InvokeOption) GetNodesResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (GetNodesResult, error) {
			args := v.(GetNodesArgs)
			r, err := GetNodes(ctx, &args, opts...)
			var s GetNodesResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(GetNodesResultOutput)
}

// A collection of arguments for invoking getNodes.
type GetNodesOutputArgs struct {
	// **(Required, String)** The id of the parent runtime group.
	RuntimeGroupId pulumi.StringInput `pulumi:"runtimeGroupId"`
}

func (GetNodesOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetNodesArgs)(nil)).Elem()
}

// A collection of values returned by getNodes.
type GetNodesResultOutput struct{ *pulumi.OutputState }

func (GetNodesResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetNodesResult)(nil)).Elem()
}

func (o GetNodesResultOutput) ToGetNodesResultOutput() GetNodesResultOutput {
	return o
}

func (o GetNodesResultOutput) ToGetNodesResultOutputWithContext(ctx context.Context) GetNodesResultOutput {
	return o
}

func (o GetNodesResultOutput) ToOutput(ctx context.Context) pulumix.Output[GetNodesResult] {
	return pulumix.Output[GetNodesResult]{
		OutputState: o.OutputState,
	}
}

// The provider-assigned unique ID for this managed resource.
func (o GetNodesResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v GetNodesResult) string { return v.Id }).(pulumi.StringOutput)
}

// **(set{node})** Set of nodes belonging to runtime group
func (o GetNodesResultOutput) Nodes() GetNodesNodeArrayOutput {
	return o.ApplyT(func(v GetNodesResult) []GetNodesNode { return v.Nodes }).(GetNodesNodeArrayOutput)
}

func (o GetNodesResultOutput) RuntimeGroupId() pulumi.StringOutput {
	return o.ApplyT(func(v GetNodesResult) string { return v.RuntimeGroupId }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(GetNodesResultOutput{})
}
