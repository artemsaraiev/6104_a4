[0m[38;5;245mrunning 4 tests from ./concepts/anchored-context/test.ts[0m
AnchoredContext OP: create -> edit -> delete ...
[0m[38;5;245m------- output -------[0m
OP anchor: {
  _id: new ObjectId("68f183775d0d32420f790244"),
  paperId: "paper-1",
  kind: "Section",
  ref: "3.2",
  snippet: "Assumption text updated",
  createdAt: 1760658295035,
  editedAt: 1760658295080
}
[0m[38;5;245m----- output end -----[0m
AnchoredContext OP: create -> edit -> delete ... [0m[32mok[0m [0m[38;5;245m(686ms)[0m
AnchoredContext variants: create multiple kinds; partial edits ...
[0m[38;5;245m------- output -------[0m
Variants anchors: {
  _id: new ObjectId("68f183775d0d32420f790245"),
  paperId: "p",
  kind: "Figure",
  ref: "Fig3",
  snippet: "caption",
  createdAt: 1760658295765,
  editedAt: 1760658295828
} {
  _id: new ObjectId("68f183775d0d32420f790246"),
  paperId: "p",
  kind: "Lines",
  ref: "12-20",
  snippet: "snippet",
  createdAt: 1760658295810
}
[0m[38;5;245m----- output end -----[0m
AnchoredContext variants: create multiple kinds; partial edits ... [0m[32mok[0m [0m[38;5;245m(700ms)[0m
AnchoredContext errors: edit/delete unknown id ... [0m[32mok[0m [0m[38;5;245m(571ms)[0m
AnchoredContext variant: delete twice -> second delete errors (strict) ...
[0m[38;5;245m------- output -------[0m
Variant3 before delete: {
  _id: new ObjectId("68f183795d0d32420f790247"),
  paperId: "paper-2",
  kind: "Section",
  ref: "2.1",
  snippet: "Init",
  createdAt: 1760658297021
}
Variant3 after first delete: null
[0m[38;5;245m----- output end -----[0m
AnchoredContext variant: delete twice -> second delete errors (strict) ... [0m[32mok[0m [0m[38;5;245m(717ms)[0m

[0m[32mok[0m | 4 passed | 0 failed [0m[38;5;245m(2s)[0m

