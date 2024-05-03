// metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: process.env.METADATA_TITLE || "",
    description: process.env.METADATA_DESCRIPTION || "",
};