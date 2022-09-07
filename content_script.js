// Put all the javascript code here, that you want to execute after page load.
console.log("Hi")

let sid = document.getElementsByClassName('pr_link')[0].children[0].href.split("?")[1].split("&")[1].split("=")[1]
localStorage.setItem("as-sid", sid)

let mainPageURL = browser.runtime.getURL(
    "main.html"
)
console.log(mainPageURL)

console.log("Finding Advisory...")
let advisoryElem;
for (const accord of document.getElementsByClassName("ajax_accordion")) {
    if (accord?.firstElementChild?.firstElementChild?.firstElementChild?.children[1]?.innerText.includes("Advisory")) {
        advisoryElem = accord.firstElementChild.firstElementChild.children[0]
        console.log("Found Advisory Element!")

    }
}


advisoryElem.childNodes[5].style = "width: 255px"
advisoryElem.childNodes[5].innerHTML = `
                <div class="ajax_accordion_row" tabindex="0" aria-expanded="false" data-url="https://quacksire.dev">
                    <div style="float: left; margin-top: 7px; padding-left: 4px;">
                        <span class="icon"></span>
                    </div>
                            <div class="float_l percent" style="padding: 7px 5px;">
                               Schedule Now
                            </div>
                <div class="clear"></div>
            <!-- DIV CLOSES ACCORDION TRIGGER -->
        </div>

`