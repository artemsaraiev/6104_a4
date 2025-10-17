running 4 tests from ./concepts/identity-verification/test.ts
IdentityVerification OP: addORCID -> addAffiliation -> addBadge ...
------- output -------
OP verification: {
  _id: "u1",
  badges: [ "Author", "ORCID" ],
  orcid: "0000-0001-2345-6789",
  affiliation: "MIT"
}
----- output end -----
IdentityVerification OP: addORCID -> addAffiliation -> addBadge ... ok (778ms)
IdentityVerification variants: updateAffiliation, revokeBadge, addBadge duplicate no-op ...
------- output -------
Variants verification: { _id: "u2", badges: [], affiliation: "Harvard" }
----- output end -----
IdentityVerification variants: updateAffiliation, revokeBadge, addBadge duplicate no-op ... ok (685ms)
IdentityVerification errors policy: revokeBadge on missing doc is no-op ... ok (586ms)
IdentityVerification variant: clear affiliation unsets field ...
------- output -------
Variant2 verification: { _id: "u3", badges: [] }
----- output end -----
IdentityVerification variant: clear affiliation unsets field ... ok (849ms)

ok | 4 passed | 0 failed (2s)

