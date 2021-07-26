import { CommandInteraction, Message, MessageActionRow, MessageEmbed } from 'discord.js';
import { Petal } from '..';
import { Store } from "./PetalStorage";

type PetalCommandOpts = {

    description?: string,
    example?: string,
    group?: string,
    arguments?: PetalCommandArguments[],
    runas?: PetalCommandRunas[],
    alias?: string[],
    delete?: boolean,

}

type PetalCommandArguments = {

    name: string,
    description?: string,
    type: 'string' | 'number' | 'member' | 'channel',
    options?: string[],
    message?: string,
    required?: boolean,

}

type PetalCommandRunas = {

    name: string,
    arguments: Array<string>

}

export type PetalCommandResponse = Promise<PetalCommandResponseData>;
export type PetalCommandResponseData = MessageEmbed | [MessageEmbed, Array<MessageActionRow>] | null;

export default class PetalCommand {

    description: string;
    example: string;
    group: string;
    arguments: PetalCommandArguments[];
    runas: PetalCommandRunas[];
    alias: string[];
    delete: boolean;

    /**
     * Petal command constructor
     * @param opts Petal command data
     * @example new PetalCommand({ })
     */
    constructor(opts: PetalCommandOpts) {

        if (!opts) throw new TypeError(`No command opts provided.`);

        this.description = opts.description ??= 'No description.';
        this.example = opts.example ??= 'No example.';
        this.group = opts.group ??= 'Un-grouped';
        this.arguments = opts.arguments ??= [];
        this.runas = opts.runas ??= [];
        this.alias = opts.alias ??= [];
        this.delete = opts.delete ??= true;

    }

    /**
     * Command run function
     * @param petal Petal instance
     * @param args Message arguments
     * @param message Message object
     * @param user_data user data store
     * @param server_data server data store
     */
    run(petal: Petal, args: any[], message: Message | CommandInteraction, user_data: Store, server_data: Store): PetalCommandResponse { return Promise.resolve(null); }


}