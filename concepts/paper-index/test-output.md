running 4 tests from ./concepts/paper-index/test.ts
PaperIndex OP: ensure -> updateMeta -> addAuthors -> addLink ...
------- output -------
OP state: {
  _id: "bb47cfa2-7207-4be4-8534-ba32bdfa64fa",
  authors: [ "u1", "u2" ],
  links: [ "https://example.com/paper" ],
  title: "Updated Title"
}
----- output end -----
PaperIndex OP: ensure -> updateMeta -> addAuthors -> addLink ... ok (668ms)
PaperIndex variants: idempotent ensure; removeAuthors; removeLink ...
------- output -------
Variants1 state: {
  _id: "5687e376-758e-4b19-abc7-4ac87db7bab5",
  authors: [ "a", "c" ],
  links: [],
  title: "T1"
}
----- output end -----
PaperIndex variants: idempotent ensure; removeAuthors; removeLink ... ok (749ms)
PaperIndex variants: dedupe authors and links ...
------- output -------
Variants2 state: {
  _id: "0a7d9fe6-957d-4331-9522-7f0a88ee730f",
  authors: [ "a", "b", "c" ],
  links: [ "u" ]
}
----- output end -----
PaperIndex variants: dedupe authors and links ... ok (861ms)
PaperIndex errors: updateMeta/removeLink on missing id ... ok (568ms)

ok | 4 passed | 0 failed (2s)

