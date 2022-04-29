import { Selector } from 'testcafe';

fixture`Login Test`
    .page`https://www.satvacart.com/fruits-vegetables/vegetables.html`;

test('Login into the account and check logout is visible or not', async t => {
    // Test code
    await t.expect(Selector("div.header-top-right").find("a").withAttribute("title","Log In").visible).ok();
    await t.click(Selector("div.header-top-right").find("a").withAttribute("title","Log In"));
    await t.typeText(Selector("#email"),"mundrak21@gmail.com");
    await t.typeText(Selector("input").withAttribute("name","login[password]"),"kaplu1305");
    await t.click(Selector("button").withAttribute("title","Login"));
    await t.expect(Selector("div.header-top-right").find("a").withAttribute("title","Log Out").visible).ok();
});