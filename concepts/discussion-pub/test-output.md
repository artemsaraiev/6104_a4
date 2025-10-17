running 4 tests from ./concepts/discussion-pub/test.ts
DiscussionPub OP: open -> startThread -> reply -> editThread -> editReply ...
------- output -------
OP thread: {
  _id: new ObjectId("68f18dd45697aecf90d11c4b"),
  pubId: "68f18dd45697aecf90d11c4a",
  author: "u1",
  anchorId: "anchor-123",
  body: "Hello edited",
  createdAt: 1760660948649,
  editedAt: 1760660948702
}
OP reply: {
  _id: new ObjectId("68f18dd45697aecf90d11c4c"),
  threadId: "68f18dd45697aecf90d11c4b",
  author: "u2",
  body: "Hi edited",
  createdAt: 1760660948683,
  editedAt: 1760660948720
}
----- output end -----
DiscussionPub OP: open -> startThread -> reply -> editThread -> editReply ... ok (999ms)
DiscussionPub variants: deleteReply then reply again; deleteThread cascades ...
------- output -------
Variants1 replies after cascade: []
----- output end -----
DiscussionPub variants: deleteReply then reply again; deleteThread cascades ... ok (1s)
DiscussionPub variants: startThread without anchor; multiple threads ...
------- output -------
Variants2 threads: 68f18dd65697aecf90d11c52 68f18dd65697aecf90d11c53
----- output end -----
DiscussionPub variants: startThread without anchor; multiple threads ... ok (898ms)
DiscussionPub errors: duplicate pub; reply missing thread; edit/delete missing ids ... ok (959ms)

ok | 4 passed | 0 failed (3s)

