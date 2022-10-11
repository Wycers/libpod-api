import got from "got";
import { Stream } from "stream";

export class Container {
  async info() {
    const res = await got("unix:/run/podman/podman.sock:/v4.0.0/libpod/info", {
      enableUnixSockets: true,
    }).json()

    return res
  }
  async create() {
    const res = await got("unix:/run/podman/podman.sock:/v4.0.0/libpod/containers/create", {
      enableUnixSockets: true,
      method: 'POST',
      json: {
	image: 'hello-world',
      }
    }).json()

    return res
  }
}
