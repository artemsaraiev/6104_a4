running 4 tests from ./concepts/paper-index/test.ts
PaperIndex OP: ensure -> updateMeta -> addAuthors -> addLink ...
------- output -------
OP state: {
  _id: "867f969a-9184-4f83-a735-159ab983052b",
  authors: [ "u1", "u2" ],
  links: [ "https://example.com/paper" ],
  title: "Updated Title"
}
----- output end -----
PaperIndex OP: ensure -> updateMeta -> addAuthors -> addLink ... ok (777ms)
PaperIndex variants: idempotent ensure; removeAuthors; removeLink ...
------- output -------
Variants1 state: {
  _id: "8ae71a5c-2ff7-4238-8e05-2d5adddaf45a",
  authors: [ "a", "c" ],
  links: [],
  title: "T1"
}
----- output end -----
PaperIndex variants: idempotent ensure; removeAuthors; removeLink ... ok (887ms)
PaperIndex variants: dedupe authors and links ...
------- output -------
Variants2 state: {
  _id: "6f2511f5-3067-4d9d-b7c2-a5a3226cfeea",
  authors: [ "a", "b", "c" ],
  links: [ "u" ]
}
----- output end -----
PaperIndex variants: dedupe authors and links ... ok (732ms)
PaperIndex errors: updateMeta/removeLink on missing id ... ok (661ms)

ok | 4 passed | 0 failed (3s)

