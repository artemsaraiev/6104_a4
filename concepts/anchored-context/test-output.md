running 4 tests from ./concepts/anchored-context/test.ts
AnchoredContext OP: create -> edit -> delete ...
------- output -------
OP anchor: {
  _id: new ObjectId("68f18dd8d671cff31f1fd6fa"),
  paperId: "paper-1",
  kind: "Section",
  ref: "3.2",
  snippet: "Assumption text updated",
  createdAt: 1760660952545,
  editedAt: 1760660952591
}
----- output end -----
AnchoredContext OP: create -> edit -> delete ... ok (769ms)
AnchoredContext variants: create multiple kinds; partial edits ...
------- output -------
Variants anchors: {
  _id: new ObjectId("68f18dd9d671cff31f1fd6fb"),
  paperId: "p",
  kind: "Figure",
  ref: "Fig3",
  snippet: "caption",
  createdAt: 1760660953158,
  editedAt: 1760660953222
} {
  _id: new ObjectId("68f18dd9d671cff31f1fd6fc"),
  paperId: "p",
  kind: "Lines",
  ref: "12-20",
  snippet: "snippet",
  createdAt: 1760660953202
}
----- output end -----
AnchoredContext variants: create multiple kinds; partial edits ... ok (610ms)
AnchoredContext errors: edit/delete unknown id ... ok (530ms)
AnchoredContext variant: delete twice -> second delete errors (strict) ...
------- output -------
Variant3 before delete: {
  _id: new ObjectId("68f18ddad671cff31f1fd6fd"),
  paperId: "paper-2",
  kind: "Section",
  ref: "2.1",
  snippet: "Init",
  createdAt: 1760660954298
}
Variant3 after first delete: null
----- output end -----
AnchoredContext variant: delete twice -> second delete errors (strict) ... ok (603ms)

ok | 4 passed | 0 failed (2s)

