# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
from . import outputs

__all__ = [
    'GetNodesResult',
    'AwaitableGetNodesResult',
    'get_nodes',
    'get_nodes_output',
]

@pulumi.output_type
class GetNodesResult:
    """
    A collection of values returned by getNodes.
    """
    def __init__(__self__, id=None, nodes=None, runtime_group_id=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if nodes and not isinstance(nodes, list):
            raise TypeError("Expected argument 'nodes' to be a list")
        pulumi.set(__self__, "nodes", nodes)
        if runtime_group_id and not isinstance(runtime_group_id, str):
            raise TypeError("Expected argument 'runtime_group_id' to be a str")
        pulumi.set(__self__, "runtime_group_id", runtime_group_id)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def nodes(self) -> Sequence['outputs.GetNodesNodeResult']:
        """
        **(set{node})** Set of nodes belonging to runtime group
        """
        return pulumi.get(self, "nodes")

    @property
    @pulumi.getter(name="runtimeGroupId")
    def runtime_group_id(self) -> str:
        return pulumi.get(self, "runtime_group_id")


class AwaitableGetNodesResult(GetNodesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNodesResult(
            id=self.id,
            nodes=self.nodes,
            runtime_group_id=self.runtime_group_id)


def get_nodes(runtime_group_id: Optional[str] = None,
              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetNodesResult:
    """
    Represents all nodes of a runtime group
    ## Example Usage

    ```python
    import pulumi
    import pulumi_konnect as konnect

    runtime_group = konnect.get_runtime_group(name="TestRuntimeGroup")
    example = konnect.get_nodes(runtime_group_id=runtime_group.id)
    ```


    :param str runtime_group_id: **(Required, String)** The id of the parent runtime group.
    """
    __args__ = dict()
    __args__['runtimeGroupId'] = runtime_group_id
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('konnect:index/getNodes:getNodes', __args__, opts=opts, typ=GetNodesResult).value

    return AwaitableGetNodesResult(
        id=pulumi.get(__ret__, 'id'),
        nodes=pulumi.get(__ret__, 'nodes'),
        runtime_group_id=pulumi.get(__ret__, 'runtime_group_id'))


@_utilities.lift_output_func(get_nodes)
def get_nodes_output(runtime_group_id: Optional[pulumi.Input[str]] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetNodesResult]:
    """
    Represents all nodes of a runtime group
    ## Example Usage

    ```python
    import pulumi
    import pulumi_konnect as konnect

    runtime_group = konnect.get_runtime_group(name="TestRuntimeGroup")
    example = konnect.get_nodes(runtime_group_id=runtime_group.id)
    ```


    :param str runtime_group_id: **(Required, String)** The id of the parent runtime group.
    """
    ...
