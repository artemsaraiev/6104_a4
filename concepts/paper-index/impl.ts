import { Collection, Db } from "npm:mongodb";

export type PaperId = string;
export type UserId = string;

export interface PaperDoc {
  _id: PaperId;
  title?: string;
  authors: UserId[];
  links: string[];
}

export class PaperIndexService {
  private db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  private papers(): Collection<PaperDoc> {
    return this.db.collection<PaperDoc>("papers");
  }

  async ensure(id: string, title?: string): Promise<string> {
    const setOnInsert: Record<string, unknown> = {
      _id: id,
      authors: [],
      links: [],
    };
    if (title !== undefined) setOnInsert.title = title;
    await this.papers().updateOne(
      { _id: id },
      { $setOnInsert: setOnInsert },
      { upsert: true },
    );
    return id;
  }

  async updateMeta(id: string, title?: string): Promise<void> {
    const update: Record<string, unknown> = {};
    if (title !== undefined) update.title = title;
    const res = await this.papers().updateOne({ _id: id }, { $set: update });
    if (res.matchedCount === 0) throw new Error("Paper not found");
  }

  async addAuthors(id: string, authors: string[]): Promise<void> {
    const res = await this.papers().updateOne(
      { _id: id },
      { $addToSet: { authors: { $each: authors } } },
    );
    if (res.matchedCount === 0) throw new Error("Paper not found");
  }

  async removeAuthors(id: string, authors: string[]): Promise<void> {
    const res = await this.papers().updateOne(
      { _id: id },
      { $pull: { authors: { $in: authors } } },
    );
    if (res.matchedCount === 0) throw new Error("Paper not found");
  }

  async addLink(id: string, url: string): Promise<void> {
    const res = await this.papers().updateOne(
      { _id: id },
      { $addToSet: { links: url } },
    );
    if (res.matchedCount === 0) throw new Error("Paper not found");
  }

  async removeLink(id: string, url: string): Promise<void> {
    const res = await this.papers().updateOne(
      { _id: id },
      { $pull: { links: url } },
    );
    if (res.matchedCount === 0) throw new Error("Paper not found");
  }
}


