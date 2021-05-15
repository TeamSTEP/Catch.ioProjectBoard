<template>
    <div class="navbar-component launch">
        <ul class="navbar-top">
            <li id="nav-company">
                <a href="https://teamstep.io/"><strong>Witch One</strong></a>
            </li>
            <li id="nav-review">
                <a href="https://quarterly.camposanto.com/"
                    ><strong
                        ><span class="collapse">Quarterly Review</span
                        ><span class="reveal">Newsletter</span></strong
                    ></a
                >
            </li>
            <li id="nav-blog">
                <a href="http://blog.camposanto.com/"
                    ><strong><span class="collapse">Development </span>Blog</strong></a
                >
            </li>
            <li id="nav-game">
                <a href="index.html"><strong>Page Name</strong></a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',
});
</script>

<style>
.fwswitch.mobile ul.navbar-top {
    display: none;
}

ul.navbar-top .reveal {
    display: none;
}
ul.navbar-top .collapse {
    display: inline;
}

ul.navbar-top a {
    text-decoration: none;
}
ul.navbar-top {
    position: relative;
    z-index: 99999;
    width: 100%;
    text-align: left;
    font-size: 0;
    line-height: 0;
    font-family: 'futura-pt';
    padding: 0;
}
.fwswitch ul.navbar-top {
    box-shadow: 0 0px 15px 0px #2c2819e3;
}

ul.navbar-top b,
ul.navbar-top strong,
ul.navbar-top b *,
ul.navbar-top strong * {
    font-weight: 700;
}
ul.navbar-top:after {
    content: '';
    display: block;
    clear: both;
}

ul.navbar-top li,
ul.navbar-top a {
    display: inline-block;
}

ul.navbar-top li {
    float: right;
}

ul.navbar-top li#nav-company {
    float: left;
}
ul.navbar-top li#nav-company a {
    font-size: 18px;
    line-height: 14px;
}

ul.navbar-top,
ul.navbar-top a {
    background-color: #000;
}

.navbar-component ul.navbar-top,
.navbar-component ul.navbar-top a {
    background-color: #2d112b;
}
.navbar-component.launch ul.navbar-top,
.navbar-component.launch ul.navbar-top a {
    background-color: #210002;
}

.navbar-component.faq ul.navbar-top,
.navbar-component.faq ul.navbar-top a {
    background-color: #ff6c3f;
}

ul.navbar-top a {
    color: #f3f1e9;
    font-size: 14px;
    line-height: 14px;
    padding: 10px;
    text-transform: uppercase;
}
.index ul.navbar-top a {
    color: #f3f1e9;
}
.navbar-component ul.navbar-top a {
    color: #ffaf00;
}
.fwswitch ul.navbar-top a {
    color: rgb(254, 242, 224);
}
.navbar-component.faq ul.navbar-top a {
    color: #2d112d;
}

ul.navbar-top li.current a,
ul.navbar-top li.current a:hover {
    background-color: #f3f1e9;
    color: #000;
}
.index ul.navbar-top li.current a,
.index ul.navbar-top li.current a:hover {
    background-color: #000;
    color: #f3f1e9;
}

.navbar-component ul.navbar-top li.current a,
.navbar-component ul.navbar-top li.current a:hover {
    background-color: #7e0030;
    color: #ff6d3f;
}
.navbar-component.launch ul.navbar-top li.current a,
.navbar-component.launch ul.navbar-top li.current a:hover {
    background-color: #a34300;
    color: #ffaf00;
}
.navbar-component.faq ul.navbar-top li.current a,
.navbar-component.faq ul.navbar-top li.current a:hover {
    background-color: #2d112d;
    color: #c9293e;
}
.fwswitch ul.navbar-top li.current a,
.fwswitch ul.navbar-top li.current a:hover {
    background-color: rgb(254, 242, 224);
}

.navbar-component ul.navbar-top {
    position: absolute;
    top: 0;
}

.navbar-component.faq ul.navbar-top {
    margin-bottom: 0;
}

ul.navbar-top a:hover {
    background-color: #44433e;
    text-decoration: none;
    border: 0;
}

.navbar-component ul.navbar-top a:hover {
    background-color: #530031;
}
.navbar-component.launch ul.navbar-top a:hover {
    background-color: #5a1715;
}

.navbar-component.faq ul.navbar-top a:hover {
    background-color: #c8512c;
}

@media only screen and (max-width: 880px) {
    ul.navbar-top .reveal {
        display: inline;
    }
    ul.navbar-top .collapse {
        display: none;
    }
}

@media only screen and (max-width: 630px) {
    ul.navbar-top a {
        padding-left: 4px;
        padding-right: 4px;
    }
    ul.navbar-top #nav-company a {
        padding-left: 10px;
        padding-right: 5px;
    }
}

@media only screen and (max-width: 560px) {
    ul.navbar-top b,
    ul.navbar-top strong,
    ul.navbar-top b *,
    ul.navbar-top strong * {
        font-weight: 700;
    }
    ul.navbar-top a {
        padding-left: 3px;
        padding-right: 3px;
    }
}

@media only screen and (max-width: 540px) {
    body {
        padding-bottom: 250px !important;
    }
    .fwswitch ul.navbar-top {
        box-shadow: none;
    }
    ul.navbar-top li,
    ul.navbar-top li#nav-company {
        float: none;
        display: block;
        text-align: center;
    }
    ul.navbar-top a {
        float: none;
        display: block;
    }
    ul.navbar-top {
        position: absolute;
        bottom: 0;
        counter-reset: c 6;
    }

    .navbar-component ul.navbar-top {
        top: initial;
    }
    ul.navbar-top .reveal {
        display: none;
    }
    ul.navbar-top .collapse {
        display: inline;
    }

    .egypt .video .container {
        top: 0;
    }
}
</style>
