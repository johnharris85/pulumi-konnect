# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['AuthenticationSettingsArgs', 'AuthenticationSettings']

@pulumi.input_type
class AuthenticationSettingsArgs:
    def __init__(__self__, *,
                 basic_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 idp_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 konnect_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 oidc_auth_enabled: Optional[pulumi.Input[bool]] = None):
        """
        The set of arguments for constructing a AuthenticationSettings resource.
        :param pulumi.Input[bool] basic_auth_enabled: **(Optional, Boolean)** Whether basic authentication is enabled.
        :param pulumi.Input[bool] idp_mapping_enabled: **(Optional, Boolean)** Whether IDP mapping is enabled.
        :param pulumi.Input[bool] konnect_mapping_enabled: **(Optional, Boolean)** Whether Konnect mapping is enabled.
        :param pulumi.Input[bool] oidc_auth_enabled: **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        if basic_auth_enabled is not None:
            pulumi.set(__self__, "basic_auth_enabled", basic_auth_enabled)
        if idp_mapping_enabled is not None:
            pulumi.set(__self__, "idp_mapping_enabled", idp_mapping_enabled)
        if konnect_mapping_enabled is not None:
            pulumi.set(__self__, "konnect_mapping_enabled", konnect_mapping_enabled)
        if oidc_auth_enabled is not None:
            pulumi.set(__self__, "oidc_auth_enabled", oidc_auth_enabled)

    @property
    @pulumi.getter(name="basicAuthEnabled")
    def basic_auth_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether basic authentication is enabled.
        """
        return pulumi.get(self, "basic_auth_enabled")

    @basic_auth_enabled.setter
    def basic_auth_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "basic_auth_enabled", value)

    @property
    @pulumi.getter(name="idpMappingEnabled")
    def idp_mapping_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether IDP mapping is enabled.
        """
        return pulumi.get(self, "idp_mapping_enabled")

    @idp_mapping_enabled.setter
    def idp_mapping_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "idp_mapping_enabled", value)

    @property
    @pulumi.getter(name="konnectMappingEnabled")
    def konnect_mapping_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether Konnect mapping is enabled.
        """
        return pulumi.get(self, "konnect_mapping_enabled")

    @konnect_mapping_enabled.setter
    def konnect_mapping_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "konnect_mapping_enabled", value)

    @property
    @pulumi.getter(name="oidcAuthEnabled")
    def oidc_auth_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        return pulumi.get(self, "oidc_auth_enabled")

    @oidc_auth_enabled.setter
    def oidc_auth_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "oidc_auth_enabled", value)


@pulumi.input_type
class _AuthenticationSettingsState:
    def __init__(__self__, *,
                 basic_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 idp_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 konnect_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 oidc_auth_enabled: Optional[pulumi.Input[bool]] = None):
        """
        Input properties used for looking up and filtering AuthenticationSettings resources.
        :param pulumi.Input[bool] basic_auth_enabled: **(Optional, Boolean)** Whether basic authentication is enabled.
        :param pulumi.Input[bool] idp_mapping_enabled: **(Optional, Boolean)** Whether IDP mapping is enabled.
        :param pulumi.Input[bool] konnect_mapping_enabled: **(Optional, Boolean)** Whether Konnect mapping is enabled.
        :param pulumi.Input[bool] oidc_auth_enabled: **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        if basic_auth_enabled is not None:
            pulumi.set(__self__, "basic_auth_enabled", basic_auth_enabled)
        if idp_mapping_enabled is not None:
            pulumi.set(__self__, "idp_mapping_enabled", idp_mapping_enabled)
        if konnect_mapping_enabled is not None:
            pulumi.set(__self__, "konnect_mapping_enabled", konnect_mapping_enabled)
        if oidc_auth_enabled is not None:
            pulumi.set(__self__, "oidc_auth_enabled", oidc_auth_enabled)

    @property
    @pulumi.getter(name="basicAuthEnabled")
    def basic_auth_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether basic authentication is enabled.
        """
        return pulumi.get(self, "basic_auth_enabled")

    @basic_auth_enabled.setter
    def basic_auth_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "basic_auth_enabled", value)

    @property
    @pulumi.getter(name="idpMappingEnabled")
    def idp_mapping_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether IDP mapping is enabled.
        """
        return pulumi.get(self, "idp_mapping_enabled")

    @idp_mapping_enabled.setter
    def idp_mapping_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "idp_mapping_enabled", value)

    @property
    @pulumi.getter(name="konnectMappingEnabled")
    def konnect_mapping_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether Konnect mapping is enabled.
        """
        return pulumi.get(self, "konnect_mapping_enabled")

    @konnect_mapping_enabled.setter
    def konnect_mapping_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "konnect_mapping_enabled", value)

    @property
    @pulumi.getter(name="oidcAuthEnabled")
    def oidc_auth_enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        return pulumi.get(self, "oidc_auth_enabled")

    @oidc_auth_enabled.setter
    def oidc_auth_enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "oidc_auth_enabled", value)


class AuthenticationSettings(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 basic_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 idp_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 konnect_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 oidc_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 __props__=None):
        """
        Represents authentication settings
        ## Example Usage

        ```python
        import pulumi
        import johnharris85_konnect as konnect

        example = konnect.AuthenticationSettings("example",
            basic_auth_enabled=True,
            idp_mapping_enabled=False,
            konnect_mapping_enabled=True,
            oidc_auth_enabled=True)
        ```

        ## Import

        Authentication settings can be imported using a proper value of `id` as described above

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] basic_auth_enabled: **(Optional, Boolean)** Whether basic authentication is enabled.
        :param pulumi.Input[bool] idp_mapping_enabled: **(Optional, Boolean)** Whether IDP mapping is enabled.
        :param pulumi.Input[bool] konnect_mapping_enabled: **(Optional, Boolean)** Whether Konnect mapping is enabled.
        :param pulumi.Input[bool] oidc_auth_enabled: **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[AuthenticationSettingsArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Represents authentication settings
        ## Example Usage

        ```python
        import pulumi
        import johnharris85_konnect as konnect

        example = konnect.AuthenticationSettings("example",
            basic_auth_enabled=True,
            idp_mapping_enabled=False,
            konnect_mapping_enabled=True,
            oidc_auth_enabled=True)
        ```

        ## Import

        Authentication settings can be imported using a proper value of `id` as described above

        :param str resource_name: The name of the resource.
        :param AuthenticationSettingsArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(AuthenticationSettingsArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 basic_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 idp_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 konnect_mapping_enabled: Optional[pulumi.Input[bool]] = None,
                 oidc_auth_enabled: Optional[pulumi.Input[bool]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = AuthenticationSettingsArgs.__new__(AuthenticationSettingsArgs)

            __props__.__dict__["basic_auth_enabled"] = basic_auth_enabled
            __props__.__dict__["idp_mapping_enabled"] = idp_mapping_enabled
            __props__.__dict__["konnect_mapping_enabled"] = konnect_mapping_enabled
            __props__.__dict__["oidc_auth_enabled"] = oidc_auth_enabled
        super(AuthenticationSettings, __self__).__init__(
            'konnect:index/authenticationSettings:AuthenticationSettings',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            basic_auth_enabled: Optional[pulumi.Input[bool]] = None,
            idp_mapping_enabled: Optional[pulumi.Input[bool]] = None,
            konnect_mapping_enabled: Optional[pulumi.Input[bool]] = None,
            oidc_auth_enabled: Optional[pulumi.Input[bool]] = None) -> 'AuthenticationSettings':
        """
        Get an existing AuthenticationSettings resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] basic_auth_enabled: **(Optional, Boolean)** Whether basic authentication is enabled.
        :param pulumi.Input[bool] idp_mapping_enabled: **(Optional, Boolean)** Whether IDP mapping is enabled.
        :param pulumi.Input[bool] konnect_mapping_enabled: **(Optional, Boolean)** Whether Konnect mapping is enabled.
        :param pulumi.Input[bool] oidc_auth_enabled: **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _AuthenticationSettingsState.__new__(_AuthenticationSettingsState)

        __props__.__dict__["basic_auth_enabled"] = basic_auth_enabled
        __props__.__dict__["idp_mapping_enabled"] = idp_mapping_enabled
        __props__.__dict__["konnect_mapping_enabled"] = konnect_mapping_enabled
        __props__.__dict__["oidc_auth_enabled"] = oidc_auth_enabled
        return AuthenticationSettings(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="basicAuthEnabled")
    def basic_auth_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        **(Optional, Boolean)** Whether basic authentication is enabled.
        """
        return pulumi.get(self, "basic_auth_enabled")

    @property
    @pulumi.getter(name="idpMappingEnabled")
    def idp_mapping_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        **(Optional, Boolean)** Whether IDP mapping is enabled.
        """
        return pulumi.get(self, "idp_mapping_enabled")

    @property
    @pulumi.getter(name="konnectMappingEnabled")
    def konnect_mapping_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        **(Optional, Boolean)** Whether Konnect mapping is enabled.
        """
        return pulumi.get(self, "konnect_mapping_enabled")

    @property
    @pulumi.getter(name="oidcAuthEnabled")
    def oidc_auth_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        **(Optional, Boolean)** Whether OIDC authentication is enabled.
        """
        return pulumi.get(self, "oidc_auth_enabled")

