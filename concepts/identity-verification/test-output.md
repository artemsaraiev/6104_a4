[0m[38;5;245mrunning 4 tests from ./concepts/identity-verification/test.ts[0m
IdentityVerification OP: addORCID -> addAffiliation -> addBadge ...
[0m[38;5;245m------- output -------[0m
OP verification: {
  _id: "u1",
  badges: [ "Author", "ORCID" ],
  orcid: "0000-0001-2345-6789",
  affiliation: "MIT"
}
[0m[38;5;245m----- output end -----[0m
IdentityVerification OP: addORCID -> addAffiliation -> addBadge ... [0m[32mok[0m [0m[38;5;245m(696ms)[0m
IdentityVerification variants: updateAffiliation, revokeBadge, addBadge duplicate no-op ...
[0m[38;5;245m------- output -------[0m
Variants verification: { _id: "u2", badges: [], affiliation: "Harvard" }
[0m[38;5;245m----- output end -----[0m
IdentityVerification variants: updateAffiliation, revokeBadge, addBadge duplicate no-op ... [0m[32mok[0m [0m[38;5;245m(722ms)[0m
IdentityVerification errors policy: revokeBadge on missing doc is no-op ... [0m[32mok[0m [0m[38;5;245m(517ms)[0m
IdentityVerification variant: clear affiliation unsets field ...
[0m[38;5;245m------- output -------[0m
Variant2 verification: { _id: "u3", badges: [] }
[0m[38;5;245m----- output end -----[0m
IdentityVerification variant: clear affiliation unsets field ... [0m[32mok[0m [0m[38;5;245m(662ms)[0m

[0m[32mok[0m | 4 passed | 0 failed [0m[38;5;245m(2s)[0m

