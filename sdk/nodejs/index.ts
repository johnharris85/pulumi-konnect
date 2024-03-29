// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AuthenticationSettingsArgs, AuthenticationSettingsState } from "./authenticationSettings";
export type AuthenticationSettings = import("./authenticationSettings").AuthenticationSettings;
export const AuthenticationSettings: typeof import("./authenticationSettings").AuthenticationSettings = null as any;
utilities.lazyLoad(exports, ["AuthenticationSettings"], () => require("./authenticationSettings"));

export { ConsumerArgs, ConsumerState } from "./consumer";
export type Consumer = import("./consumer").Consumer;
export const Consumer: typeof import("./consumer").Consumer = null as any;
utilities.lazyLoad(exports, ["Consumer"], () => require("./consumer"));

export { GetConsumerArgs, GetConsumerResult, GetConsumerOutputArgs } from "./getConsumer";
export const getConsumer: typeof import("./getConsumer").getConsumer = null as any;
export const getConsumerOutput: typeof import("./getConsumer").getConsumerOutput = null as any;
utilities.lazyLoad(exports, ["getConsumer","getConsumerOutput"], () => require("./getConsumer"));

export { GetNodesArgs, GetNodesResult, GetNodesOutputArgs } from "./getNodes";
export const getNodes: typeof import("./getNodes").getNodes = null as any;
export const getNodesOutput: typeof import("./getNodes").getNodesOutput = null as any;
utilities.lazyLoad(exports, ["getNodes","getNodesOutput"], () => require("./getNodes"));

export { GetRoleArgs, GetRoleResult, GetRoleOutputArgs } from "./getRole";
export const getRole: typeof import("./getRole").getRole = null as any;
export const getRoleOutput: typeof import("./getRole").getRoleOutput = null as any;
utilities.lazyLoad(exports, ["getRole","getRoleOutput"], () => require("./getRole"));

export { GetRuntimeGroupArgs, GetRuntimeGroupResult, GetRuntimeGroupOutputArgs } from "./getRuntimeGroup";
export const getRuntimeGroup: typeof import("./getRuntimeGroup").getRuntimeGroup = null as any;
export const getRuntimeGroupOutput: typeof import("./getRuntimeGroup").getRuntimeGroupOutput = null as any;
utilities.lazyLoad(exports, ["getRuntimeGroup","getRuntimeGroupOutput"], () => require("./getRuntimeGroup"));

export { GetTeamArgs, GetTeamResult, GetTeamOutputArgs } from "./getTeam";
export const getTeam: typeof import("./getTeam").getTeam = null as any;
export const getTeamOutput: typeof import("./getTeam").getTeamOutput = null as any;
utilities.lazyLoad(exports, ["getTeam","getTeamOutput"], () => require("./getTeam"));

export { GetTeamRoleArgs, GetTeamRoleResult, GetTeamRoleOutputArgs } from "./getTeamRole";
export const getTeamRole: typeof import("./getTeamRole").getTeamRole = null as any;
export const getTeamRoleOutput: typeof import("./getTeamRole").getTeamRoleOutput = null as any;
utilities.lazyLoad(exports, ["getTeamRole","getTeamRoleOutput"], () => require("./getTeamRole"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GetUserRoleArgs, GetUserRoleResult, GetUserRoleOutputArgs } from "./getUserRole";
export const getUserRole: typeof import("./getUserRole").getUserRole = null as any;
export const getUserRoleOutput: typeof import("./getUserRole").getUserRoleOutput = null as any;
utilities.lazyLoad(exports, ["getUserRole","getUserRoleOutput"], () => require("./getUserRole"));

export { IdentityProviderArgs, IdentityProviderState } from "./identityProvider";
export type IdentityProvider = import("./identityProvider").IdentityProvider;
export const IdentityProvider: typeof import("./identityProvider").IdentityProvider = null as any;
utilities.lazyLoad(exports, ["IdentityProvider"], () => require("./identityProvider"));

export { PluginArgs, PluginState } from "./plugin";
export type Plugin = import("./plugin").Plugin;
export const Plugin: typeof import("./plugin").Plugin = null as any;
utilities.lazyLoad(exports, ["Plugin"], () => require("./plugin"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RouteArgs, RouteState } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));

export { RuntimeGroupArgs, RuntimeGroupState } from "./runtimeGroup";
export type RuntimeGroup = import("./runtimeGroup").RuntimeGroup;
export const RuntimeGroup: typeof import("./runtimeGroup").RuntimeGroup = null as any;
utilities.lazyLoad(exports, ["RuntimeGroup"], () => require("./runtimeGroup"));

export { ServiceArgs, ServiceState } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { TeamArgs, TeamState } from "./team";
export type Team = import("./team").Team;
export const Team: typeof import("./team").Team = null as any;
utilities.lazyLoad(exports, ["Team"], () => require("./team"));

export { TeamMappingsArgs, TeamMappingsState } from "./teamMappings";
export type TeamMappings = import("./teamMappings").TeamMappings;
export const TeamMappings: typeof import("./teamMappings").TeamMappings = null as any;
utilities.lazyLoad(exports, ["TeamMappings"], () => require("./teamMappings"));

export { TeamRoleArgs, TeamRoleState } from "./teamRole";
export type TeamRole = import("./teamRole").TeamRole;
export const TeamRole: typeof import("./teamRole").TeamRole = null as any;
utilities.lazyLoad(exports, ["TeamRole"], () => require("./teamRole"));

export { TeamUserArgs, TeamUserState } from "./teamUser";
export type TeamUser = import("./teamUser").TeamUser;
export const TeamUser: typeof import("./teamUser").TeamUser = null as any;
utilities.lazyLoad(exports, ["TeamUser"], () => require("./teamUser"));

export { UserArgs, UserState } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));

export { UserRoleArgs, UserRoleState } from "./userRole";
export type UserRole = import("./userRole").UserRole;
export const UserRole: typeof import("./userRole").UserRole = null as any;
utilities.lazyLoad(exports, ["UserRole"], () => require("./userRole"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "konnect:index/authenticationSettings:AuthenticationSettings":
                return new AuthenticationSettings(name, <any>undefined, { urn })
            case "konnect:index/consumer:Consumer":
                return new Consumer(name, <any>undefined, { urn })
            case "konnect:index/identityProvider:IdentityProvider":
                return new IdentityProvider(name, <any>undefined, { urn })
            case "konnect:index/plugin:Plugin":
                return new Plugin(name, <any>undefined, { urn })
            case "konnect:index/route:Route":
                return new Route(name, <any>undefined, { urn })
            case "konnect:index/runtimeGroup:RuntimeGroup":
                return new RuntimeGroup(name, <any>undefined, { urn })
            case "konnect:index/service:Service":
                return new Service(name, <any>undefined, { urn })
            case "konnect:index/team:Team":
                return new Team(name, <any>undefined, { urn })
            case "konnect:index/teamMappings:TeamMappings":
                return new TeamMappings(name, <any>undefined, { urn })
            case "konnect:index/teamRole:TeamRole":
                return new TeamRole(name, <any>undefined, { urn })
            case "konnect:index/teamUser:TeamUser":
                return new TeamUser(name, <any>undefined, { urn })
            case "konnect:index/user:User":
                return new User(name, <any>undefined, { urn })
            case "konnect:index/userRole:UserRole":
                return new UserRole(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("konnect", "index/authenticationSettings", _module)
pulumi.runtime.registerResourceModule("konnect", "index/consumer", _module)
pulumi.runtime.registerResourceModule("konnect", "index/identityProvider", _module)
pulumi.runtime.registerResourceModule("konnect", "index/plugin", _module)
pulumi.runtime.registerResourceModule("konnect", "index/route", _module)
pulumi.runtime.registerResourceModule("konnect", "index/runtimeGroup", _module)
pulumi.runtime.registerResourceModule("konnect", "index/service", _module)
pulumi.runtime.registerResourceModule("konnect", "index/team", _module)
pulumi.runtime.registerResourceModule("konnect", "index/teamMappings", _module)
pulumi.runtime.registerResourceModule("konnect", "index/teamRole", _module)
pulumi.runtime.registerResourceModule("konnect", "index/teamUser", _module)
pulumi.runtime.registerResourceModule("konnect", "index/user", _module)
pulumi.runtime.registerResourceModule("konnect", "index/userRole", _module)
pulumi.runtime.registerResourcePackage("konnect", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:konnect") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
