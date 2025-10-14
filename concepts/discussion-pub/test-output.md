[0m[38;5;245mrunning 4 tests from ./concepts/discussion-pub/test.ts[0m
DiscussionPub OP: open -> startThread -> reply -> editThread -> editReply ...
[0m[38;5;245m------- output -------[0m
OP thread: {
  _id: new ObjectId("68f183874d2c30f1dd1c5136"),
  pubId: "68f183874d2c30f1dd1c5135",
  author: "u1",
  anchorId: "anchor-123",
  body: "Hello edited",
  createdAt: 1760658311500,
  editedAt: 1760658311557
}
OP reply: {
  _id: new ObjectId("68f183874d2c30f1dd1c5137"),
  threadId: "68f183874d2c30f1dd1c5136",
  author: "u2",
  body: "Hi edited",
  createdAt: 1760658311538,
  editedAt: 1760658311575
}
[0m[38;5;245m----- output end -----[0m
DiscussionPub OP: open -> startThread -> reply -> editThread -> editReply ... [0m[32mok[0m [0m[38;5;245m(1s)[0m
DiscussionPub variants: deleteReply then reply again; deleteThread cascades ...
[0m[38;5;245m------- output -------[0m
Variants1 replies after cascade: []
[0m[38;5;245m----- output end -----[0m
DiscussionPub variants: deleteReply then reply again; deleteThread cascades ... [0m[32mok[0m [0m[38;5;245m(1s)[0m
DiscussionPub variants: startThread without anchor; multiple threads ...
[0m[38;5;245m------- output -------[0m
Variants2 threads: 68f183894d2c30f1dd1c513d 68f183894d2c30f1dd1c513e
[0m[38;5;245m----- output end -----[0m
DiscussionPub variants: startThread without anchor; multiple threads ... [0m[32mok[0m [0m[38;5;245m(854ms)[0m
DiscussionPub errors: duplicate pub; reply missing thread; edit/delete missing ids ... [0m[32mok[0m [0m[38;5;245m(747ms)[0m

[0m[32mok[0m | 4 passed | 0 failed [0m[38;5;245m(3s)[0m

