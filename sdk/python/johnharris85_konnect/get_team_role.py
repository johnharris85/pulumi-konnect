# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'GetTeamRoleResult',
    'AwaitableGetTeamRoleResult',
    'get_team_role',
    'get_team_role_output',
]

@pulumi.output_type
class GetTeamRoleResult:
    """
    A collection of values returned by getTeamRole.
    """
    def __init__(__self__, entity_id=None, entity_region=None, entity_type_display_name=None, id=None, role_display_name=None, search_entity_type_display_name=None, search_role_display_name=None, team_id=None):
        if entity_id and not isinstance(entity_id, str):
            raise TypeError("Expected argument 'entity_id' to be a str")
        pulumi.set(__self__, "entity_id", entity_id)
        if entity_region and not isinstance(entity_region, str):
            raise TypeError("Expected argument 'entity_region' to be a str")
        pulumi.set(__self__, "entity_region", entity_region)
        if entity_type_display_name and not isinstance(entity_type_display_name, str):
            raise TypeError("Expected argument 'entity_type_display_name' to be a str")
        pulumi.set(__self__, "entity_type_display_name", entity_type_display_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if role_display_name and not isinstance(role_display_name, str):
            raise TypeError("Expected argument 'role_display_name' to be a str")
        pulumi.set(__self__, "role_display_name", role_display_name)
        if search_entity_type_display_name and not isinstance(search_entity_type_display_name, str):
            raise TypeError("Expected argument 'search_entity_type_display_name' to be a str")
        pulumi.set(__self__, "search_entity_type_display_name", search_entity_type_display_name)
        if search_role_display_name and not isinstance(search_role_display_name, str):
            raise TypeError("Expected argument 'search_role_display_name' to be a str")
        pulumi.set(__self__, "search_role_display_name", search_role_display_name)
        if team_id and not isinstance(team_id, str):
            raise TypeError("Expected argument 'team_id' to be a str")
        pulumi.set(__self__, "team_id", team_id)

    @property
    @pulumi.getter(name="entityId")
    def entity_id(self) -> str:
        """
        **(String)** The id of the entity for which the role applies.
        """
        return pulumi.get(self, "entity_id")

    @property
    @pulumi.getter(name="entityRegion")
    def entity_region(self) -> str:
        """
        **(String)** The region of the entity for which the role applies.
        """
        return pulumi.get(self, "entity_region")

    @property
    @pulumi.getter(name="entityTypeDisplayName")
    def entity_type_display_name(self) -> Optional[str]:
        return pulumi.get(self, "entity_type_display_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="roleDisplayName")
    def role_display_name(self) -> Optional[str]:
        return pulumi.get(self, "role_display_name")

    @property
    @pulumi.getter(name="searchEntityTypeDisplayName")
    def search_entity_type_display_name(self) -> Optional[str]:
        return pulumi.get(self, "search_entity_type_display_name")

    @property
    @pulumi.getter(name="searchRoleDisplayName")
    def search_role_display_name(self) -> Optional[str]:
        return pulumi.get(self, "search_role_display_name")

    @property
    @pulumi.getter(name="teamId")
    def team_id(self) -> str:
        return pulumi.get(self, "team_id")


class AwaitableGetTeamRoleResult(GetTeamRoleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTeamRoleResult(
            entity_id=self.entity_id,
            entity_region=self.entity_region,
            entity_type_display_name=self.entity_type_display_name,
            id=self.id,
            role_display_name=self.role_display_name,
            search_entity_type_display_name=self.search_entity_type_display_name,
            search_role_display_name=self.search_role_display_name,
            team_id=self.team_id)


def get_team_role(entity_type_display_name: Optional[str] = None,
                  role_display_name: Optional[str] = None,
                  search_entity_type_display_name: Optional[str] = None,
                  search_role_display_name: Optional[str] = None,
                  team_id: Optional[str] = None,
                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetTeamRoleResult:
    """
    Represents a role assigned to a team
    ## Example Usage

    ```python
    import pulumi
    import pulumi_konnect as konnect

    team = konnect.get_team(name="runtime-admin")
    example = konnect.get_team_role(team_id=team.id,
        entity_type_display_name="Runtime Groups")
    ```


    :param str entity_type_display_name: **(Optional, String)** The filter string to apply to the display name of the entity type. Must be `Runtime Groups` or `Services`. Uses equality.
    :param str role_display_name: **(Optional, String)** The filter string to apply to the display name of the role. Uses equality.
    :param str search_entity_type_display_name: **(Optional, String)** The search string to apply to the display name of the entity type, like `Runtime Groups` or `Services`. Uses contains.
    :param str search_role_display_name: **(Optional, String)** The search string to apply to the display name of the role. Uses contains.
    :param str team_id: **(Required, String)** The id of the team assigned the role
    """
    __args__ = dict()
    __args__['entityTypeDisplayName'] = entity_type_display_name
    __args__['roleDisplayName'] = role_display_name
    __args__['searchEntityTypeDisplayName'] = search_entity_type_display_name
    __args__['searchRoleDisplayName'] = search_role_display_name
    __args__['teamId'] = team_id
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('konnect:index/getTeamRole:getTeamRole', __args__, opts=opts, typ=GetTeamRoleResult).value

    return AwaitableGetTeamRoleResult(
        entity_id=pulumi.get(__ret__, 'entity_id'),
        entity_region=pulumi.get(__ret__, 'entity_region'),
        entity_type_display_name=pulumi.get(__ret__, 'entity_type_display_name'),
        id=pulumi.get(__ret__, 'id'),
        role_display_name=pulumi.get(__ret__, 'role_display_name'),
        search_entity_type_display_name=pulumi.get(__ret__, 'search_entity_type_display_name'),
        search_role_display_name=pulumi.get(__ret__, 'search_role_display_name'),
        team_id=pulumi.get(__ret__, 'team_id'))


@_utilities.lift_output_func(get_team_role)
def get_team_role_output(entity_type_display_name: Optional[pulumi.Input[Optional[str]]] = None,
                         role_display_name: Optional[pulumi.Input[Optional[str]]] = None,
                         search_entity_type_display_name: Optional[pulumi.Input[Optional[str]]] = None,
                         search_role_display_name: Optional[pulumi.Input[Optional[str]]] = None,
                         team_id: Optional[pulumi.Input[str]] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetTeamRoleResult]:
    """
    Represents a role assigned to a team
    ## Example Usage

    ```python
    import pulumi
    import pulumi_konnect as konnect

    team = konnect.get_team(name="runtime-admin")
    example = konnect.get_team_role(team_id=team.id,
        entity_type_display_name="Runtime Groups")
    ```


    :param str entity_type_display_name: **(Optional, String)** The filter string to apply to the display name of the entity type. Must be `Runtime Groups` or `Services`. Uses equality.
    :param str role_display_name: **(Optional, String)** The filter string to apply to the display name of the role. Uses equality.
    :param str search_entity_type_display_name: **(Optional, String)** The search string to apply to the display name of the entity type, like `Runtime Groups` or `Services`. Uses contains.
    :param str search_role_display_name: **(Optional, String)** The search string to apply to the display name of the role. Uses contains.
    :param str team_id: **(Required, String)** The id of the team assigned the role
    """
    ...
