import { goToHome, goToRegister } from "../navigation/nav";

export function loginForAdmin() {
    cy.writeFile("../dev_database.json", "{\"program-stats\":[{\"id#level\":\"@all-anonymous#1\",\"week\":\"2022-38\",\"id\":\"@all-anonymous\",\"level\":1,\"MissingCommandException\":1,\"IncompleteCommandException\":2,\"successful_runs\":4}],\"users\":[{\"username\":\"teacher_user\",\"password\":\"$2b$09$vkF36em4O5M8MHooarkzL.FRZeFyk39owlmR9UQSbYL5MofschUei\",\"email\":\"teacher_user@user.com\",\"language\":\"en\",\"keyword_language\":\"en\",\"created\":1666010820398,\"third_party\":null,\"verification_pending\":\"$2b$09$eYSVtBhb/Ig6k4oFQvb3qeOZwhezaDme3z46SqyidVUCwKpj3DubC\",\"last_login\":1666010982879,\"country\":\"NL\",\"birth_year\":2001,\"gender\":\"m\",\"epoch\":1,\"is_teacher\":1},{\"username\":\"admin_user\",\"password\":\"$2b$09$Gj4Lz5mvboIo84Cdxe8WT.sDDD6lDyfHjc9/.Mz8YUW8w/dh3bKZ.\",\"email\":\"user@user.com\",\"language\":\"en\",\"keyword_language\":\"en\",\"created\":1666010862655,\"third_party\":null,\"verification_pending\":\"$2b$09$qKGKB0SurPy/Y.Ax17zhy.J4pUkcnWF11w1ZJ6ryz5l2WUvDe8tw2\",\"last_login\":1666010977727,\"country\":\"NL\",\"birth_year\":2001,\"gender\":\"m\",\"epoch\":1,\"is_teacher\":1}],\"tokens\":[{\"id\":\"$2b$09$96Dl08jiK0BoY0w/W3dawe\",\"username\":\"admin_user\",\"ttl\":1666876800},{\"id\":\"$2b$09$ELa9wEimtO7CVuE9c91X4e\",\"username\":\"admin_user\",\"ttl\":1666877030},{\"id\":\"$2b$09$0RgAN2yV8n3TEp89sPgE4e\",\"username\":\"admin_user\",\"ttl\":1666877216},{\"id\":\"$2b$09$kCITWaqS2UsoHyiQYsEk1O\",\"username\":\"admin_user\",\"ttl\":1666877242},{\"id\":\"$2b$09$eO/klhC7AYRZrX5xxZvV6e\",\"username\":\"admin_user\",\"ttl\":1666877330},{\"id\":\"$2b$09$RBX5ieGUWkQGkgZEjs65su\",\"username\":\"admin_user\",\"ttl\":1666877343},{\"id\":\"$2b$09$J0Fz9QxzIXSGCfICxzBSo.\",\"username\":\"admin_user\",\"ttl\":1666877466},{\"id\":\"$2b$09$8uwok7btT70XQxJoms9u0u\",\"username\":\"admin_user\",\"ttl\":1666877496},{\"id\":\"$2b$09$qUc0nitvKleopC9FxVKhA.\",\"username\":\"admin_user\",\"ttl\":1666877527},{\"id\":\"$2b$09$pnuEUy7bqF7ZUuYi/KLfY.\",\"username\":\"admin_user\",\"ttl\":1666877582},{\"id\":\"$2b$09$iNEoYDCFztNQvlDlp4Qyl.\",\"username\":\"admin_user\",\"ttl\":1666877637},{\"id\":\"$2b$09$GHGgx228VzJi2eFevb381.\",\"username\":\"admin_user\",\"ttl\":1666877734},{\"id\":\"$2b$09$/InVqh0hjFSPdxZ/PcylSu\",\"username\":\"admin_user\",\"ttl\":1666877742},{\"id\":\"$2b$09$Js/On3HEm.mrgQF/iffL4e\",\"username\":\"admin_user\",\"ttl\":1666878378},{\"id\":\"$2b$09$poV8sWLv.ztwI9sFKvQ3OO\",\"username\":\"admin_user\",\"ttl\":1666878431},{\"id\":\"$2b$09$aycJsVoP35H46PatSThQ9u\",\"username\":\"martin2\",\"ttl\":1666878549},{\"id\":\"$2b$09$aFN5kAccg2.hngR/ihljlO\",\"username\":\"teacher_user\",\"ttl\":1666878745},{\"id\":\"$2b$09$UxwPlmIwaQToJj6WoUh2/.\",\"username\":\"teacher_user\",\"ttl\":1666878836},{\"id\":\"$2b$09$o7aueiMNGve2GA8Xl4lNQe\",\"username\":\"teacher_user\",\"ttl\":1666878867},{\"id\":\"$2b$09$G.3kZXU34e32aqYeL/1j2e\",\"username\":\"admin_user\",\"ttl\":1666879017},{\"id\":\"$2b$09$254IL/UynaOvbh2IRjtKqO\",\"username\":\"admin_user\",\"ttl\":1666879136},{\"id\":\"$2b$09$ph4yEUIaCN7WSaFkgS8bhu\",\"username\":\"admin_user\",\"ttl\":1666879307},{\"id\":\"$2b$09$7uimth7DpcG9T0oISfJWve\",\"username\":\"admin_user\",\"ttl\":1666879395},{\"id\":\"$2b$09$Mtm93meU16CHK29bpW6Tgu\",\"username\":\"admin_user\",\"ttl\":1666879567},{\"id\":\"$2b$09$7OjAsK4tqvqA93SRx4ISQu\",\"username\":\"admin_user\",\"ttl\":1666879645},{\"id\":\"$2b$09$48YnAB0W/Wjxl1nuuuDvRu\",\"username\":\"admin_user\",\"ttl\":1666879694},{\"id\":\"$2b$09$WCKu/CCmNzCBxE59Zocqke\",\"username\":\"admin_user\",\"ttl\":1666879763},{\"id\":\"$2b$09$CvZCa.Tapu0rMOeu8aVMne\",\"username\":\"admin_user\",\"ttl\":1666879783},{\"id\":\"$2b$09$PQLAwY7DLYifliHcCzlfh.\",\"username\":\"admin_user\",\"ttl\":1666879846},{\"id\":\"$2b$09$GJnJOEjUMSc1A5o0ufGoou\",\"username\":\"admin_user\",\"ttl\":1666879901},{\"id\":\"$2b$09$A2xyec6TRs9xAkeg3Pr/yu\",\"username\":\"admin_user\",\"ttl\":1666879932},{\"id\":\"$2b$09$AbEhWzBy60gHDVS2h/Dw4e\",\"username\":\"teacher_user\",\"ttl\":1666879947},{\"id\":\"$2b$09$.057HYNLKgEmEVG86an9fu\",\"username\":\"teacher_user\",\"ttl\":1666880929},{\"id\":\"$2b$09$AR.5iohyaZb93oyoHAMGG.\",\"username\":\"teacher_user\",\"ttl\":1666890014},{\"id\":\"$2b$09$dUxPD1N7jDxCC6OzBjrJdO\",\"username\":\"teacher_user\",\"ttl\":1666893643},{\"id\":\"$2b$09$bXKALf/tCM7RH8mMfKGy9u\",\"username\":\"teacher_user\",\"ttl\":1666942777},{\"id\":\"$2b$09$g/b.q3xGarha8usk3U8.1u\",\"username\":\"martin4\",\"ttl\":1666961149},{\"id\":\"$2b$09$okihA1RtMtEHM1GB3/grG.\",\"username\":\"teacher_user\",\"ttl\":1666961205},{\"id\":\"$2b$09$wgz10JG7BFciO1b.w107XO\",\"username\":\"teacher_user\",\"ttl\":1666961542},{\"id\":\"$2b$09$kcDUi8ixSMFYKbP3UFoBNu\",\"username\":\"teacher_user\",\"ttl\":1666961626},{\"id\":\"$2b$09$UEfjgML7Clw3YJgdjGE.e.\",\"username\":\"teacher_user\",\"ttl\":1666961699},{\"id\":\"$2b$09$pgsqLrTCvJW2X/kJ1/M8Ke\",\"username\":\"teacher_user\",\"ttl\":1666962155},{\"id\":\"$2b$09$7njoOfY3WwscUQaczmZrtu\",\"username\":\"teacher_user\",\"ttl\":1666962398},{\"id\":\"$2b$09$zJf7EKLKvvm.m5.a.gSou.\",\"username\":\"teacher_user\",\"ttl\":1666962683},{\"id\":\"$2b$09$6M1g2AUljq/uuaRGydiNp.\",\"username\":\"teacher_user\",\"ttl\":1666963135},{\"id\":\"$2b$09$cPcFk7BJ0G0MzjcCJUefMu\",\"username\":\"admin_user\",\"ttl\":1666963786},{\"id\":\"$2b$09$vTRGyeLw4nD.3kpGB9dUF.\",\"username\":\"admin_user\",\"ttl\":1666963862},{\"id\":\"$2b$09$wPdb0Wv2iX4T3UgFz/WIT.\",\"username\":\"admin_user\",\"ttl\":1666963914},{\"id\":\"$2b$09$SMoEOqXwKrmIMyAqDlr2i.\",\"username\":\"admin_user\",\"ttl\":1666964063},{\"id\":\"$2b$09$4XBIZkJdYC1VYXgwcXb/Zu\",\"username\":\"admin_user\",\"ttl\":1666964598},{\"id\":\"$2b$09$K3skDl.n48AR98CLHnoiCO\",\"username\":\"teacher_user\",\"ttl\":1666964706},{\"id\":\"$2b$09$9sZ5tbqaAucjVFxR6aX5wu\",\"username\":\"teacher_user\",\"ttl\":1666964757},{\"id\":\"$2b$09$N1v5QR69AcmhFzTjLq5pOO\",\"username\":\"admin_user\",\"ttl\":1666964839},{\"id\":\"$2b$09$W4D/6Oi3mnz2hhFWARhCf.\",\"username\":\"admin_user\",\"ttl\":1666964850},{\"id\":\"$2b$09$WQYEeX.zuU0tGTrjJCUSZ.\",\"username\":\"admin_user\",\"ttl\":1666964966},{\"id\":\"$2b$09$cmk9OBoOvU51wQc6EH7oZO\",\"username\":\"admin_user\",\"ttl\":1666965098},{\"id\":\"$2b$09$Nkc9t8hHBtKt8z4T0fZzd.\",\"username\":\"teacher_user\",\"ttl\":1666965127},{\"id\":\"$2b$09$s0PMk6liJ0wcLPJSkJCrNu\",\"username\":\"teacher_user\",\"ttl\":1666965262},{\"id\":\"$2b$09$sFs24qD/gXq8ayWT.geqoO\",\"username\":\"teacher_user\",\"ttl\":1666965681},{\"id\":\"$2b$09$zgDhh6GqMfJ52GnEezydp.\",\"username\":\"teacher_user\",\"ttl\":1666965716},{\"id\":\"$2b$09$vktwdBmLnh7FHP8ruMZVAe\",\"username\":\"teacher_user\",\"ttl\":1666967383},{\"id\":\"$2b$09$GnVNvFHZZliAr53nRqMwWO\",\"username\":\"teacher_user\",\"ttl\":1666967446},{\"id\":\"$2b$09$Fm5k4ipkLvY0oREVVaXGoe\",\"username\":\"teacher_user\",\"ttl\":1666967767},{\"id\":\"$2b$09$9Q/DCQdDXtldO89mM7UoIO\",\"username\":\"teacher_user\",\"ttl\":1666967777},{\"id\":\"$2b$09$CbIdndwPNwP/Cn0tb5foee\",\"username\":\"teacher_user\",\"ttl\":1666967963},{\"id\":\"$2b$09$/eSI8/7oGXpawnT4VyRO8u\",\"username\":\"teacher_user\",\"ttl\":1666968028},{\"id\":\"$2b$09$1v85mzDEEySkeNhgNoEWyO\",\"username\":\"teacher_user\",\"ttl\":1666968117},{\"id\":\"$2b$09$2XNZznCQ76m2yFnRwYwOcO\",\"username\":\"teacher_user\",\"ttl\":1666968164},{\"id\":\"$2b$09$k.8GIePdLbBrB0F8.KsEde\",\"username\":\"teacher_user\",\"ttl\":1666991486},{\"id\":\"$2b$09$DxFR/sZdCmnfA1iUBtLMy.\",\"username\":\"teacher_user\",\"ttl\":1667001136},{\"id\":\"$2b$09$9cYZ43mg0XVxz6PhFDhnde\",\"username\":\"teacher_user\",\"ttl\":1667007051},{\"id\":\"$2b$09$IYUtOKFLRSIjHtrYOHR/HO\",\"username\":\"teacher_user\",\"ttl\":1667015478},{\"id\":\"$2b$09$3fatsS6pcrCaA6DFKTopAO\",\"username\":\"teacher_user\",\"ttl\":1667021188},{\"id\":\"$2b$09$Tn212OeEUL4mYcjHXhsk6O\",\"username\":\"teacher_user\",\"ttl\":1667025030},{\"id\":\"$2b$09$Eb0qFwy.OOTFI3pzX5Tq.e\",\"username\":\"teacher_user\",\"ttl\":1667025514},{\"id\":\"$2b$09$Vy/..I2Ju.zTsoq9bZglYu\",\"username\":\"teacher_user\",\"ttl\":1667029955},{\"id\":\"$2b$09$.8UKvBs6c7QSfCFAc3kV2e\",\"username\":\"teacher_user\",\"ttl\":1667036192},{\"id\":\"$2b$09$HyprfGxX29Fdb9fSQMfQiu\",\"username\":\"teacher_user\",\"ttl\":1667037413},{\"id\":\"$2b$09$swzhhRw9GSCcuY9fPlosuu\",\"username\":\"teacher_user\",\"ttl\":1667040690},{\"id\":\"$2b$09$J9X7SOHuo1uaUe6V7ZpUfO\",\"username\":\"teacher_user\",\"ttl\":1667044586},{\"id\":\"$2b$09$N1OhDUKILqrM1M06NzB1Fu\",\"username\":\"teacher_user\",\"ttl\":1667219815},{\"id\":\"$2b$09$enCvcsP0FD9VTAyfYe6CIe\",\"username\":\"teacher_user\",\"ttl\":1667220167},{\"id\":\"$2b$09$fVlbI90gX19I6.VEHQkGku\",\"username\":\"admin_user\",\"ttl\":1667220241},{\"id\":\"$2b$09$w5W12WqG.6FSiVhT8eth8.\",\"username\":\"admin_user\",\"ttl\":1667220268},{\"id\":\"$2b$09$bsRGO.DiCI9Vd1XRuzn4ne\",\"username\":\"admin_user\",\"ttl\":1667220288},{\"id\":\"$2b$09$UY3ZcNLQ1Cg9hbeoL0Ae5O\",\"username\":\"teacher_user\",\"ttl\":1667220300},{\"id\":\"$2b$09$kU6ETFotJtwIDTvYhleaKu\",\"username\":\"teacher_user\",\"ttl\":1667220420},{\"id\":\"$2b$09$DUXVpycGQcmLVXPWACW9qu\",\"username\":\"admin_user\",\"ttl\":1667220463},{\"id\":\"$2b$09$iTUcy9Zm6dF9dc48GQujDu\",\"username\":\"admin_user\",\"ttl\":1667220494},{\"id\":\"$2b$09$k26PKYQ8/ZN0mE4njKrLzu\",\"username\":\"admin_user\",\"ttl\":1667220546},{\"id\":\"$2b$09$CkGWmiUpGWtAOZKR50TEce\",\"username\":\"teacher_user\",\"ttl\":1667220583}]}");

    
    goToHome();
    cy.get(':nth-child(6) > .menubar-text').click();

    cy.get('#username').type("admin_user");
    cy.get("#password").type("useruser");
    cy.get('#login > .green-btn').click();
    
}

export function loginForTeacher() {
    cy.writeFile("../dev_database.json", "{\"program-stats\":[{\"id#level\":\"@all-anonymous#1\",\"week\":\"2022-38\",\"id\":\"@all-anonymous\",\"level\":1,\"MissingCommandException\":1,\"IncompleteCommandException\":2,\"successful_runs\":4}],\"users\":[{\"username\":\"teacher_user\",\"password\":\"$2b$09$vkF36em4O5M8MHooarkzL.FRZeFyk39owlmR9UQSbYL5MofschUei\",\"email\":\"teacher_user@user.com\",\"language\":\"en\",\"keyword_language\":\"en\",\"created\":1666010820398,\"third_party\":null,\"verification_pending\":\"$2b$09$eYSVtBhb/Ig6k4oFQvb3qeOZwhezaDme3z46SqyidVUCwKpj3DubC\",\"last_login\":1666010982879,\"country\":\"NL\",\"birth_year\":2001,\"gender\":\"m\",\"epoch\":1,\"is_teacher\":1},{\"username\":\"admin_user\",\"password\":\"$2b$09$Gj4Lz5mvboIo84Cdxe8WT.sDDD6lDyfHjc9/.Mz8YUW8w/dh3bKZ.\",\"email\":\"user@user.com\",\"language\":\"en\",\"keyword_language\":\"en\",\"created\":1666010862655,\"third_party\":null,\"verification_pending\":\"$2b$09$qKGKB0SurPy/Y.Ax17zhy.J4pUkcnWF11w1ZJ6ryz5l2WUvDe8tw2\",\"last_login\":1666010977727,\"country\":\"NL\",\"birth_year\":2001,\"gender\":\"m\",\"epoch\":1,\"is_teacher\":1}],\"tokens\":[{\"id\":\"$2b$09$96Dl08jiK0BoY0w/W3dawe\",\"username\":\"admin_user\",\"ttl\":1666876800},{\"id\":\"$2b$09$ELa9wEimtO7CVuE9c91X4e\",\"username\":\"admin_user\",\"ttl\":1666877030},{\"id\":\"$2b$09$0RgAN2yV8n3TEp89sPgE4e\",\"username\":\"admin_user\",\"ttl\":1666877216},{\"id\":\"$2b$09$kCITWaqS2UsoHyiQYsEk1O\",\"username\":\"admin_user\",\"ttl\":1666877242},{\"id\":\"$2b$09$eO/klhC7AYRZrX5xxZvV6e\",\"username\":\"admin_user\",\"ttl\":1666877330},{\"id\":\"$2b$09$RBX5ieGUWkQGkgZEjs65su\",\"username\":\"admin_user\",\"ttl\":1666877343},{\"id\":\"$2b$09$J0Fz9QxzIXSGCfICxzBSo.\",\"username\":\"admin_user\",\"ttl\":1666877466},{\"id\":\"$2b$09$8uwok7btT70XQxJoms9u0u\",\"username\":\"admin_user\",\"ttl\":1666877496},{\"id\":\"$2b$09$qUc0nitvKleopC9FxVKhA.\",\"username\":\"admin_user\",\"ttl\":1666877527},{\"id\":\"$2b$09$pnuEUy7bqF7ZUuYi/KLfY.\",\"username\":\"admin_user\",\"ttl\":1666877582},{\"id\":\"$2b$09$iNEoYDCFztNQvlDlp4Qyl.\",\"username\":\"admin_user\",\"ttl\":1666877637},{\"id\":\"$2b$09$GHGgx228VzJi2eFevb381.\",\"username\":\"admin_user\",\"ttl\":1666877734},{\"id\":\"$2b$09$/InVqh0hjFSPdxZ/PcylSu\",\"username\":\"admin_user\",\"ttl\":1666877742},{\"id\":\"$2b$09$Js/On3HEm.mrgQF/iffL4e\",\"username\":\"admin_user\",\"ttl\":1666878378},{\"id\":\"$2b$09$poV8sWLv.ztwI9sFKvQ3OO\",\"username\":\"admin_user\",\"ttl\":1666878431},{\"id\":\"$2b$09$aycJsVoP35H46PatSThQ9u\",\"username\":\"martin2\",\"ttl\":1666878549},{\"id\":\"$2b$09$aFN5kAccg2.hngR/ihljlO\",\"username\":\"teacher_user\",\"ttl\":1666878745},{\"id\":\"$2b$09$UxwPlmIwaQToJj6WoUh2/.\",\"username\":\"teacher_user\",\"ttl\":1666878836},{\"id\":\"$2b$09$o7aueiMNGve2GA8Xl4lNQe\",\"username\":\"teacher_user\",\"ttl\":1666878867},{\"id\":\"$2b$09$G.3kZXU34e32aqYeL/1j2e\",\"username\":\"admin_user\",\"ttl\":1666879017},{\"id\":\"$2b$09$254IL/UynaOvbh2IRjtKqO\",\"username\":\"admin_user\",\"ttl\":1666879136},{\"id\":\"$2b$09$ph4yEUIaCN7WSaFkgS8bhu\",\"username\":\"admin_user\",\"ttl\":1666879307},{\"id\":\"$2b$09$7uimth7DpcG9T0oISfJWve\",\"username\":\"admin_user\",\"ttl\":1666879395},{\"id\":\"$2b$09$Mtm93meU16CHK29bpW6Tgu\",\"username\":\"admin_user\",\"ttl\":1666879567},{\"id\":\"$2b$09$7OjAsK4tqvqA93SRx4ISQu\",\"username\":\"admin_user\",\"ttl\":1666879645},{\"id\":\"$2b$09$48YnAB0W/Wjxl1nuuuDvRu\",\"username\":\"admin_user\",\"ttl\":1666879694},{\"id\":\"$2b$09$WCKu/CCmNzCBxE59Zocqke\",\"username\":\"admin_user\",\"ttl\":1666879763},{\"id\":\"$2b$09$CvZCa.Tapu0rMOeu8aVMne\",\"username\":\"admin_user\",\"ttl\":1666879783},{\"id\":\"$2b$09$PQLAwY7DLYifliHcCzlfh.\",\"username\":\"admin_user\",\"ttl\":1666879846},{\"id\":\"$2b$09$GJnJOEjUMSc1A5o0ufGoou\",\"username\":\"admin_user\",\"ttl\":1666879901},{\"id\":\"$2b$09$A2xyec6TRs9xAkeg3Pr/yu\",\"username\":\"admin_user\",\"ttl\":1666879932},{\"id\":\"$2b$09$AbEhWzBy60gHDVS2h/Dw4e\",\"username\":\"teacher_user\",\"ttl\":1666879947},{\"id\":\"$2b$09$.057HYNLKgEmEVG86an9fu\",\"username\":\"teacher_user\",\"ttl\":1666880929},{\"id\":\"$2b$09$AR.5iohyaZb93oyoHAMGG.\",\"username\":\"teacher_user\",\"ttl\":1666890014},{\"id\":\"$2b$09$dUxPD1N7jDxCC6OzBjrJdO\",\"username\":\"teacher_user\",\"ttl\":1666893643},{\"id\":\"$2b$09$bXKALf/tCM7RH8mMfKGy9u\",\"username\":\"teacher_user\",\"ttl\":1666942777},{\"id\":\"$2b$09$g/b.q3xGarha8usk3U8.1u\",\"username\":\"martin4\",\"ttl\":1666961149},{\"id\":\"$2b$09$okihA1RtMtEHM1GB3/grG.\",\"username\":\"teacher_user\",\"ttl\":1666961205},{\"id\":\"$2b$09$wgz10JG7BFciO1b.w107XO\",\"username\":\"teacher_user\",\"ttl\":1666961542},{\"id\":\"$2b$09$kcDUi8ixSMFYKbP3UFoBNu\",\"username\":\"teacher_user\",\"ttl\":1666961626},{\"id\":\"$2b$09$UEfjgML7Clw3YJgdjGE.e.\",\"username\":\"teacher_user\",\"ttl\":1666961699},{\"id\":\"$2b$09$pgsqLrTCvJW2X/kJ1/M8Ke\",\"username\":\"teacher_user\",\"ttl\":1666962155},{\"id\":\"$2b$09$7njoOfY3WwscUQaczmZrtu\",\"username\":\"teacher_user\",\"ttl\":1666962398},{\"id\":\"$2b$09$zJf7EKLKvvm.m5.a.gSou.\",\"username\":\"teacher_user\",\"ttl\":1666962683},{\"id\":\"$2b$09$6M1g2AUljq/uuaRGydiNp.\",\"username\":\"teacher_user\",\"ttl\":1666963135},{\"id\":\"$2b$09$cPcFk7BJ0G0MzjcCJUefMu\",\"username\":\"admin_user\",\"ttl\":1666963786},{\"id\":\"$2b$09$vTRGyeLw4nD.3kpGB9dUF.\",\"username\":\"admin_user\",\"ttl\":1666963862},{\"id\":\"$2b$09$wPdb0Wv2iX4T3UgFz/WIT.\",\"username\":\"admin_user\",\"ttl\":1666963914},{\"id\":\"$2b$09$SMoEOqXwKrmIMyAqDlr2i.\",\"username\":\"admin_user\",\"ttl\":1666964063},{\"id\":\"$2b$09$4XBIZkJdYC1VYXgwcXb/Zu\",\"username\":\"admin_user\",\"ttl\":1666964598},{\"id\":\"$2b$09$K3skDl.n48AR98CLHnoiCO\",\"username\":\"teacher_user\",\"ttl\":1666964706},{\"id\":\"$2b$09$9sZ5tbqaAucjVFxR6aX5wu\",\"username\":\"teacher_user\",\"ttl\":1666964757},{\"id\":\"$2b$09$N1v5QR69AcmhFzTjLq5pOO\",\"username\":\"admin_user\",\"ttl\":1666964839},{\"id\":\"$2b$09$W4D/6Oi3mnz2hhFWARhCf.\",\"username\":\"admin_user\",\"ttl\":1666964850},{\"id\":\"$2b$09$WQYEeX.zuU0tGTrjJCUSZ.\",\"username\":\"admin_user\",\"ttl\":1666964966},{\"id\":\"$2b$09$cmk9OBoOvU51wQc6EH7oZO\",\"username\":\"admin_user\",\"ttl\":1666965098},{\"id\":\"$2b$09$Nkc9t8hHBtKt8z4T0fZzd.\",\"username\":\"teacher_user\",\"ttl\":1666965127},{\"id\":\"$2b$09$s0PMk6liJ0wcLPJSkJCrNu\",\"username\":\"teacher_user\",\"ttl\":1666965262},{\"id\":\"$2b$09$sFs24qD/gXq8ayWT.geqoO\",\"username\":\"teacher_user\",\"ttl\":1666965681},{\"id\":\"$2b$09$zgDhh6GqMfJ52GnEezydp.\",\"username\":\"teacher_user\",\"ttl\":1666965716},{\"id\":\"$2b$09$vktwdBmLnh7FHP8ruMZVAe\",\"username\":\"teacher_user\",\"ttl\":1666967383},{\"id\":\"$2b$09$GnVNvFHZZliAr53nRqMwWO\",\"username\":\"teacher_user\",\"ttl\":1666967446},{\"id\":\"$2b$09$Fm5k4ipkLvY0oREVVaXGoe\",\"username\":\"teacher_user\",\"ttl\":1666967767},{\"id\":\"$2b$09$9Q/DCQdDXtldO89mM7UoIO\",\"username\":\"teacher_user\",\"ttl\":1666967777},{\"id\":\"$2b$09$CbIdndwPNwP/Cn0tb5foee\",\"username\":\"teacher_user\",\"ttl\":1666967963},{\"id\":\"$2b$09$/eSI8/7oGXpawnT4VyRO8u\",\"username\":\"teacher_user\",\"ttl\":1666968028},{\"id\":\"$2b$09$1v85mzDEEySkeNhgNoEWyO\",\"username\":\"teacher_user\",\"ttl\":1666968117},{\"id\":\"$2b$09$2XNZznCQ76m2yFnRwYwOcO\",\"username\":\"teacher_user\",\"ttl\":1666968164},{\"id\":\"$2b$09$k.8GIePdLbBrB0F8.KsEde\",\"username\":\"teacher_user\",\"ttl\":1666991486},{\"id\":\"$2b$09$DxFR/sZdCmnfA1iUBtLMy.\",\"username\":\"teacher_user\",\"ttl\":1667001136},{\"id\":\"$2b$09$9cYZ43mg0XVxz6PhFDhnde\",\"username\":\"teacher_user\",\"ttl\":1667007051},{\"id\":\"$2b$09$IYUtOKFLRSIjHtrYOHR/HO\",\"username\":\"teacher_user\",\"ttl\":1667015478},{\"id\":\"$2b$09$3fatsS6pcrCaA6DFKTopAO\",\"username\":\"teacher_user\",\"ttl\":1667021188},{\"id\":\"$2b$09$Tn212OeEUL4mYcjHXhsk6O\",\"username\":\"teacher_user\",\"ttl\":1667025030},{\"id\":\"$2b$09$Eb0qFwy.OOTFI3pzX5Tq.e\",\"username\":\"teacher_user\",\"ttl\":1667025514},{\"id\":\"$2b$09$Vy/..I2Ju.zTsoq9bZglYu\",\"username\":\"teacher_user\",\"ttl\":1667029955},{\"id\":\"$2b$09$.8UKvBs6c7QSfCFAc3kV2e\",\"username\":\"teacher_user\",\"ttl\":1667036192},{\"id\":\"$2b$09$HyprfGxX29Fdb9fSQMfQiu\",\"username\":\"teacher_user\",\"ttl\":1667037413},{\"id\":\"$2b$09$swzhhRw9GSCcuY9fPlosuu\",\"username\":\"teacher_user\",\"ttl\":1667040690},{\"id\":\"$2b$09$J9X7SOHuo1uaUe6V7ZpUfO\",\"username\":\"teacher_user\",\"ttl\":1667044586},{\"id\":\"$2b$09$N1OhDUKILqrM1M06NzB1Fu\",\"username\":\"teacher_user\",\"ttl\":1667219815},{\"id\":\"$2b$09$enCvcsP0FD9VTAyfYe6CIe\",\"username\":\"teacher_user\",\"ttl\":1667220167},{\"id\":\"$2b$09$fVlbI90gX19I6.VEHQkGku\",\"username\":\"admin_user\",\"ttl\":1667220241},{\"id\":\"$2b$09$w5W12WqG.6FSiVhT8eth8.\",\"username\":\"admin_user\",\"ttl\":1667220268},{\"id\":\"$2b$09$bsRGO.DiCI9Vd1XRuzn4ne\",\"username\":\"admin_user\",\"ttl\":1667220288},{\"id\":\"$2b$09$UY3ZcNLQ1Cg9hbeoL0Ae5O\",\"username\":\"teacher_user\",\"ttl\":1667220300},{\"id\":\"$2b$09$kU6ETFotJtwIDTvYhleaKu\",\"username\":\"teacher_user\",\"ttl\":1667220420},{\"id\":\"$2b$09$DUXVpycGQcmLVXPWACW9qu\",\"username\":\"admin_user\",\"ttl\":1667220463},{\"id\":\"$2b$09$iTUcy9Zm6dF9dc48GQujDu\",\"username\":\"admin_user\",\"ttl\":1667220494},{\"id\":\"$2b$09$k26PKYQ8/ZN0mE4njKrLzu\",\"username\":\"admin_user\",\"ttl\":1667220546},{\"id\":\"$2b$09$CkGWmiUpGWtAOZKR50TEce\",\"username\":\"teacher_user\",\"ttl\":1667220583}]}");
    goToHome();
    
    cy.get(':nth-child(6) > .menubar-text').click();
    cy.get('#username').type("teacher_user");
    cy.get("#password").type("useruser");
    cy.get('#login > .green-btn').click();
}

export function logout()
{
    goToHome();            
    cy.get("body").then($body => {
        if ($body.find(".menubar-text:contains('Log in')").length == 0) {   
            
            cy.get('.dropdown > .menubar-text').click();
            cy.get(':nth-child(4) > .dropdown-item').click();
            cy.wait(500);
            
        } 
    });
}

export default {loginForAdmin, loginForTeacher};