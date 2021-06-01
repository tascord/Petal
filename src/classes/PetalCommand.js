"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PetalStorage_1 = __importDefault(require("./PetalStorage"));
var Store = PetalStorage_1.default.Store;
var PetalCommand = /** @class */ (function () {
    /**
     * Petal command constructor
     * @param opts Petal command data
     * @example new PetalCommand({  })
     */
    function PetalCommand(opts) {
        if (!opts)
            throw new TypeError("No command opts provided.");
        this.description = opts.description || 'No description.';
        this.example = opts.example || 'No example.';
        this.group = opts.group || 'Un-grouped';
        this.arguments = opts.arguments || [];
        this.runas = opts.runas || [];
        this.alias = opts.alias || [];
    }
    /**
     * Command run function
     * @param petal Petal instance
     * @param args Message arguments
     * @param message Message object
     * @param user_data user data store
     * @param server_data server data store
     */
    PetalCommand.prototype.run = function (petal, args, message, user_data, server_data) { return Promise.resolve(null); };
    return PetalCommand;
}());
exports.default = PetalCommand;
//# sourceMappingURL=PetalCommand.js.map