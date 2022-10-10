import got from "got";
import { Stream } from "stream";

export class Container {
  async info() {
    return await got("/run/podman/podman.sock", {
      enableUnixSockets: true,
    });
  }
  async create(data: string | Buffer | Stream) {
  }
}
