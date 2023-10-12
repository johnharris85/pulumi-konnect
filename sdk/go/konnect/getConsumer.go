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

// Represents a consumer
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
//			_, err = konnect.LookupConsumer(ctx, &konnect.LookupConsumerArgs{
//				RuntimeGroupId: runtimeGroup.Id,
//				SearchUsername: pulumi.StringRef("Bob"),
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func LookupConsumer(ctx *pulumi.Context, args *LookupConsumerArgs, opts ...pulumi.InvokeOption) (*LookupConsumerResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv LookupConsumerResult
	err := ctx.Invoke("konnect:index/getConsumer:getConsumer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getConsumer.
type LookupConsumerArgs struct {
	// **(Optional, String)** The filter string to apply to the customId of the consumer. Uses equality.
	CustomId *string `pulumi:"customId"`
	// **(Required, String)** The id of the runtime group containing consumer
	RuntimeGroupId string `pulumi:"runtimeGroupId"`
	// **(Optional, String)** The search string to apply to the customId of the consumer. Uses contains.
	SearchCustomId *string `pulumi:"searchCustomId"`
	// **(Optional, String)** The search string to apply to the username of the consumer. Uses contains.
	SearchUsername *string `pulumi:"searchUsername"`
	// **(Optional, String)** The filter string to apply to the username of the consumer. Uses equality.
	Username *string `pulumi:"username"`
}

// A collection of values returned by getConsumer.
type LookupConsumerResult struct {
	// **(String)** Id of the consumer alone
	ConsumerId string  `pulumi:"consumerId"`
	CustomId   *string `pulumi:"customId"`
	// The provider-assigned unique ID for this managed resource.
	Id             string  `pulumi:"id"`
	RuntimeGroupId string  `pulumi:"runtimeGroupId"`
	SearchCustomId *string `pulumi:"searchCustomId"`
	SearchUsername *string `pulumi:"searchUsername"`
	Username       *string `pulumi:"username"`
}

func LookupConsumerOutput(ctx *pulumi.Context, args LookupConsumerOutputArgs, opts ...pulumi.InvokeOption) LookupConsumerResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupConsumerResult, error) {
			args := v.(LookupConsumerArgs)
			r, err := LookupConsumer(ctx, &args, opts...)
			var s LookupConsumerResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(LookupConsumerResultOutput)
}

// A collection of arguments for invoking getConsumer.
type LookupConsumerOutputArgs struct {
	// **(Optional, String)** The filter string to apply to the customId of the consumer. Uses equality.
	CustomId pulumi.StringPtrInput `pulumi:"customId"`
	// **(Required, String)** The id of the runtime group containing consumer
	RuntimeGroupId pulumi.StringInput `pulumi:"runtimeGroupId"`
	// **(Optional, String)** The search string to apply to the customId of the consumer. Uses contains.
	SearchCustomId pulumi.StringPtrInput `pulumi:"searchCustomId"`
	// **(Optional, String)** The search string to apply to the username of the consumer. Uses contains.
	SearchUsername pulumi.StringPtrInput `pulumi:"searchUsername"`
	// **(Optional, String)** The filter string to apply to the username of the consumer. Uses equality.
	Username pulumi.StringPtrInput `pulumi:"username"`
}

func (LookupConsumerOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupConsumerArgs)(nil)).Elem()
}

// A collection of values returned by getConsumer.
type LookupConsumerResultOutput struct{ *pulumi.OutputState }

func (LookupConsumerResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupConsumerResult)(nil)).Elem()
}

func (o LookupConsumerResultOutput) ToLookupConsumerResultOutput() LookupConsumerResultOutput {
	return o
}

func (o LookupConsumerResultOutput) ToLookupConsumerResultOutputWithContext(ctx context.Context) LookupConsumerResultOutput {
	return o
}

func (o LookupConsumerResultOutput) ToOutput(ctx context.Context) pulumix.Output[LookupConsumerResult] {
	return pulumix.Output[LookupConsumerResult]{
		OutputState: o.OutputState,
	}
}

// **(String)** Id of the consumer alone
func (o LookupConsumerResultOutput) ConsumerId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupConsumerResult) string { return v.ConsumerId }).(pulumi.StringOutput)
}

func (o LookupConsumerResultOutput) CustomId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupConsumerResult) *string { return v.CustomId }).(pulumi.StringPtrOutput)
}

// The provider-assigned unique ID for this managed resource.
func (o LookupConsumerResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupConsumerResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o LookupConsumerResultOutput) RuntimeGroupId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupConsumerResult) string { return v.RuntimeGroupId }).(pulumi.StringOutput)
}

func (o LookupConsumerResultOutput) SearchCustomId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupConsumerResult) *string { return v.SearchCustomId }).(pulumi.StringPtrOutput)
}

func (o LookupConsumerResultOutput) SearchUsername() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupConsumerResult) *string { return v.SearchUsername }).(pulumi.StringPtrOutput)
}

func (o LookupConsumerResultOutput) Username() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupConsumerResult) *string { return v.Username }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupConsumerResultOutput{})
}
