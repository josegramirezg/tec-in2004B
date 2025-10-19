"use server";

import { glob } from "glob";
import path from "path";

export async function findFile(fileName: string) {
    const publicPath = path.join(process.cwd(), "public/documents/");
    const file = await glob(`**/${fileName}.html`, { cwd: publicPath });

    if (file[0]) {
        const webPath = `/documents/${file[0].replace(/\\/g, '/')}`;
        return webPath;
    }
    return null;
}