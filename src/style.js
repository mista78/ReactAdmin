const GlobalStyle =`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
@import url("https://fonts.cdnfonts.com/css/bl-melody");
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

body {
  background: #fff;
  color: #222;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.45;
  min-width: 0;
  font-weight: 400;
}

.link {
  font-weight: 900;
  font-family: "BL Melody";
  font-style: normal;
  font-weight: 700;
  line-height: 0.6 !important;
}

.Moodboard__lame {
  display: flex;
  position: relative;
  min-height: 360px;
}
.Moodboard__lame > * {
  flex: 1;
}
.Moodboard__lame > *[class*=w-] {
  flex: unset;
}
.Moodboard__lame__edition {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  left: 0;
  height: fit-content;
  display: none;
  min-height: fit-content !important;
  z-index: 300;
}
.Moodboard__lame__edition button {
  width: fit-content;
  font-size: 36px;
}

iframe {
  height: 90%;
  position: absolute;
  top: 40px;
  left: 420px;
  right: 20px;
  bottom: 0;
  margin: auto;
  border: 1px dashed magenta;
}

.frame {
  position: absolute;
  top: 70px;
  left: 420px;
  right: 20px;
  bottom: 20px;
}

.if {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding-block-start: 0px !important;
}

.Moodboard__col {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.Moodboard__col .Moodboard__col__edition {
  z-index: 100;
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  width: fit-content;
}

[class=edit-btn] {
  display: none;
}

.editor .Moodboard__lame,
.editor .Moodboard__lame.line {
  border: 2px dashed lime;
}
.editor .Moodboard__lame:hover [class*=lame__edition],
.editor .Moodboard__lame.line:hover [class*=lame__edition] {
  display: block;
}
.editor [class=edit-btn] {
  display: block;
}
.editor .Moodboard__col {
  border: 1px dashed pink;
}
.editor .Moodboard__col:hover .Moodboard__col__edition {
  display: block;
}
.editor main {
  padding-left: 420px;
  padding-right: 20px;
}

.group-input {
  display: flex;
}

.sidebar-edition {
  position: aboslute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: #000;
  width: fit-content;
  min-width: 400px;
  height: fit-content;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  z-index: 100;
  background: #fff;
}
.sidebar-edition.active {
  transform: translateX(0);
}
.sidebar-edition .sidebar-edition__show,
.sidebar-edition .sidebar-edition__close {
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}
.sidebar-edition .sidebar-edition__show:focus,
.sidebar-edition .sidebar-edition__close:focus {
  outline: none;
}
.sidebar-edition .sidebar-edition__show {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
}
.sidebar-edition .sidebar-edition__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}
.sidebar-edition .sidebar-edition__header .btn-close {
  font-size: 36px;
}
.sidebar-edition .sidebar-edition__body__item {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow: auto;
  border: 1px solid #000;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}
.sidebar-edition .sidebar-edition__body__item > * {
  margin: 10px 0;
}
.sidebar-edition .sidebar-edition__body__item input,
.sidebar-edition .sidebar-edition__body__item select,
.sidebar-edition .sidebar-edition__body__item textarea {
  width: 100%;
  border: 1px solid #000;
  padding: 10px 5px;
  font-size: 15px;
  color: #000;
  font-weight: 600;
}
.sidebar-edition .sidebar-edition__body__item input:focus,
.sidebar-edition .sidebar-edition__body__item select:focus,
.sidebar-edition .sidebar-edition__body__item textarea:focus {
  outline: none;
}
.sidebar-edition .sidebar-edition__body__item input:after,
.sidebar-edition .sidebar-edition__body__item select:after,
.sidebar-edition .sidebar-edition__body__item textarea:after {
  content: "test";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
}
.sidebar-edition .sidebar-edition__body__item button {
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}
.sidebar-edition .sidebar-edition__body__item button:focus {
  outline: none;
}

.p-1 {
  padding: 0.1rem;
}

.pb-1 {
  padding-block: 0.1rem;
}

.pi-1 {
  padding-inline: 0.1rem;
}

.pbs-1 {
  padding-block-start: 0.1rem;
}

.pbe-1 {
  padding-block-end: 0.1rem;
}

.pis-1 {
  padding-inline-start: 0.1rem;
}

.pie-1 {
  padding-inline-end: 0.1rem;
}

.p-2 {
  padding: 0.2rem;
}

.pb-2 {
  padding-block: 0.2rem;
}

.pi-2 {
  padding-inline: 0.2rem;
}

.pbs-2 {
  padding-block-start: 0.2rem;
}

.pbe-2 {
  padding-block-end: 0.2rem;
}

.pis-2 {
  padding-inline-start: 0.2rem;
}

.pie-2 {
  padding-inline-end: 0.2rem;
}

.p-3 {
  padding: 0.3rem;
}

.pb-3 {
  padding-block: 0.3rem;
}

.pi-3 {
  padding-inline: 0.3rem;
}

.pbs-3 {
  padding-block-start: 0.3rem;
}

.pbe-3 {
  padding-block-end: 0.3rem;
}

.pis-3 {
  padding-inline-start: 0.3rem;
}

.pie-3 {
  padding-inline-end: 0.3rem;
}

.p-4 {
  padding: 0.4rem;
}

.pb-4 {
  padding-block: 0.4rem;
}

.pi-4 {
  padding-inline: 0.4rem;
}

.pbs-4 {
  padding-block-start: 0.4rem;
}

.pbe-4 {
  padding-block-end: 0.4rem;
}

.pis-4 {
  padding-inline-start: 0.4rem;
}

.pie-4 {
  padding-inline-end: 0.4rem;
}

.p-5 {
  padding: 0.5rem;
}

.pb-5 {
  padding-block: 0.5rem;
}

.pi-5 {
  padding-inline: 0.5rem;
}

.pbs-5 {
  padding-block-start: 0.5rem;
}

.pbe-5 {
  padding-block-end: 0.5rem;
}

.pis-5 {
  padding-inline-start: 0.5rem;
}

.pie-5 {
  padding-inline-end: 0.5rem;
}

.p-6 {
  padding: 0.6rem;
}

.pb-6 {
  padding-block: 0.6rem;
}

.pi-6 {
  padding-inline: 0.6rem;
}

.pbs-6 {
  padding-block-start: 0.6rem;
}

.pbe-6 {
  padding-block-end: 0.6rem;
}

.pis-6 {
  padding-inline-start: 0.6rem;
}

.pie-6 {
  padding-inline-end: 0.6rem;
}

.p-7 {
  padding: 0.7rem;
}

.pb-7 {
  padding-block: 0.7rem;
}

.pi-7 {
  padding-inline: 0.7rem;
}

.pbs-7 {
  padding-block-start: 0.7rem;
}

.pbe-7 {
  padding-block-end: 0.7rem;
}

.pis-7 {
  padding-inline-start: 0.7rem;
}

.pie-7 {
  padding-inline-end: 0.7rem;
}

.p-8 {
  padding: 0.8rem;
}

.pb-8 {
  padding-block: 0.8rem;
}

.pi-8 {
  padding-inline: 0.8rem;
}

.pbs-8 {
  padding-block-start: 0.8rem;
}

.pbe-8 {
  padding-block-end: 0.8rem;
}

.pis-8 {
  padding-inline-start: 0.8rem;
}

.pie-8 {
  padding-inline-end: 0.8rem;
}

.p-9 {
  padding: 0.9rem;
}

.pb-9 {
  padding-block: 0.9rem;
}

.pi-9 {
  padding-inline: 0.9rem;
}

.pbs-9 {
  padding-block-start: 0.9rem;
}

.pbe-9 {
  padding-block-end: 0.9rem;
}

.pis-9 {
  padding-inline-start: 0.9rem;
}

.pie-9 {
  padding-inline-end: 0.9rem;
}

.p-10 {
  padding: 1rem;
}

.pb-10 {
  padding-block: 1rem;
}

.pi-10 {
  padding-inline: 1rem;
}

.pbs-10 {
  padding-block-start: 1rem;
}

.pbe-10 {
  padding-block-end: 1rem;
}

.pis-10 {
  padding-inline-start: 1rem;
}

.pie-10 {
  padding-inline-end: 1rem;
}

.p-11 {
  padding: 1.1rem;
}

.pb-11 {
  padding-block: 1.1rem;
}

.pi-11 {
  padding-inline: 1.1rem;
}

.pbs-11 {
  padding-block-start: 1.1rem;
}

.pbe-11 {
  padding-block-end: 1.1rem;
}

.pis-11 {
  padding-inline-start: 1.1rem;
}

.pie-11 {
  padding-inline-end: 1.1rem;
}

.p-12 {
  padding: 1.2rem;
}

.pb-12 {
  padding-block: 1.2rem;
}

.pi-12 {
  padding-inline: 1.2rem;
}

.pbs-12 {
  padding-block-start: 1.2rem;
}

.pbe-12 {
  padding-block-end: 1.2rem;
}

.pis-12 {
  padding-inline-start: 1.2rem;
}

.pie-12 {
  padding-inline-end: 1.2rem;
}

.p-13 {
  padding: 1.3rem;
}

.pb-13 {
  padding-block: 1.3rem;
}

.pi-13 {
  padding-inline: 1.3rem;
}

.pbs-13 {
  padding-block-start: 1.3rem;
}

.pbe-13 {
  padding-block-end: 1.3rem;
}

.pis-13 {
  padding-inline-start: 1.3rem;
}

.pie-13 {
  padding-inline-end: 1.3rem;
}

.p-14 {
  padding: 1.4rem;
}

.pb-14 {
  padding-block: 1.4rem;
}

.pi-14 {
  padding-inline: 1.4rem;
}

.pbs-14 {
  padding-block-start: 1.4rem;
}

.pbe-14 {
  padding-block-end: 1.4rem;
}

.pis-14 {
  padding-inline-start: 1.4rem;
}

.pie-14 {
  padding-inline-end: 1.4rem;
}

.p-15 {
  padding: 1.5rem;
}

.pb-15 {
  padding-block: 1.5rem;
}

.pi-15 {
  padding-inline: 1.5rem;
}

.pbs-15 {
  padding-block-start: 1.5rem;
}

.pbe-15 {
  padding-block-end: 1.5rem;
}

.pis-15 {
  padding-inline-start: 1.5rem;
}

.pie-15 {
  padding-inline-end: 1.5rem;
}

.p-16 {
  padding: 1.6rem;
}

.pb-16 {
  padding-block: 1.6rem;
}

.pi-16 {
  padding-inline: 1.6rem;
}

.pbs-16 {
  padding-block-start: 1.6rem;
}

.pbe-16 {
  padding-block-end: 1.6rem;
}

.pis-16 {
  padding-inline-start: 1.6rem;
}

.pie-16 {
  padding-inline-end: 1.6rem;
}

.p-17 {
  padding: 1.7rem;
}

.pb-17 {
  padding-block: 1.7rem;
}

.pi-17 {
  padding-inline: 1.7rem;
}

.pbs-17 {
  padding-block-start: 1.7rem;
}

.pbe-17 {
  padding-block-end: 1.7rem;
}

.pis-17 {
  padding-inline-start: 1.7rem;
}

.pie-17 {
  padding-inline-end: 1.7rem;
}

.p-18 {
  padding: 1.8rem;
}

.pb-18 {
  padding-block: 1.8rem;
}

.pi-18 {
  padding-inline: 1.8rem;
}

.pbs-18 {
  padding-block-start: 1.8rem;
}

.pbe-18 {
  padding-block-end: 1.8rem;
}

.pis-18 {
  padding-inline-start: 1.8rem;
}

.pie-18 {
  padding-inline-end: 1.8rem;
}

.p-19 {
  padding: 1.9rem;
}

.pb-19 {
  padding-block: 1.9rem;
}

.pi-19 {
  padding-inline: 1.9rem;
}

.pbs-19 {
  padding-block-start: 1.9rem;
}

.pbe-19 {
  padding-block-end: 1.9rem;
}

.pis-19 {
  padding-inline-start: 1.9rem;
}

.pie-19 {
  padding-inline-end: 1.9rem;
}

.p-20 {
  padding: 2rem;
}

.pb-20 {
  padding-block: 2rem;
}

.pi-20 {
  padding-inline: 2rem;
}

.pbs-20 {
  padding-block-start: 2rem;
}

.pbe-20 {
  padding-block-end: 2rem;
}

.pis-20 {
  padding-inline-start: 2rem;
}

.pie-20 {
  padding-inline-end: 2rem;
}

.p-21 {
  padding: 2.1rem;
}

.pb-21 {
  padding-block: 2.1rem;
}

.pi-21 {
  padding-inline: 2.1rem;
}

.pbs-21 {
  padding-block-start: 2.1rem;
}

.pbe-21 {
  padding-block-end: 2.1rem;
}

.pis-21 {
  padding-inline-start: 2.1rem;
}

.pie-21 {
  padding-inline-end: 2.1rem;
}

.p-22 {
  padding: 2.2rem;
}

.pb-22 {
  padding-block: 2.2rem;
}

.pi-22 {
  padding-inline: 2.2rem;
}

.pbs-22 {
  padding-block-start: 2.2rem;
}

.pbe-22 {
  padding-block-end: 2.2rem;
}

.pis-22 {
  padding-inline-start: 2.2rem;
}

.pie-22 {
  padding-inline-end: 2.2rem;
}

.p-23 {
  padding: 2.3rem;
}

.pb-23 {
  padding-block: 2.3rem;
}

.pi-23 {
  padding-inline: 2.3rem;
}

.pbs-23 {
  padding-block-start: 2.3rem;
}

.pbe-23 {
  padding-block-end: 2.3rem;
}

.pis-23 {
  padding-inline-start: 2.3rem;
}

.pie-23 {
  padding-inline-end: 2.3rem;
}

.p-24 {
  padding: 2.4rem;
}

.pb-24 {
  padding-block: 2.4rem;
}

.pi-24 {
  padding-inline: 2.4rem;
}

.pbs-24 {
  padding-block-start: 2.4rem;
}

.pbe-24 {
  padding-block-end: 2.4rem;
}

.pis-24 {
  padding-inline-start: 2.4rem;
}

.pie-24 {
  padding-inline-end: 2.4rem;
}

.p-25 {
  padding: 2.5rem;
}

.pb-25 {
  padding-block: 2.5rem;
}

.pi-25 {
  padding-inline: 2.5rem;
}

.pbs-25 {
  padding-block-start: 2.5rem;
}

.pbe-25 {
  padding-block-end: 2.5rem;
}

.pis-25 {
  padding-inline-start: 2.5rem;
}

.pie-25 {
  padding-inline-end: 2.5rem;
}

.p-26 {
  padding: 2.6rem;
}

.pb-26 {
  padding-block: 2.6rem;
}

.pi-26 {
  padding-inline: 2.6rem;
}

.pbs-26 {
  padding-block-start: 2.6rem;
}

.pbe-26 {
  padding-block-end: 2.6rem;
}

.pis-26 {
  padding-inline-start: 2.6rem;
}

.pie-26 {
  padding-inline-end: 2.6rem;
}

.p-27 {
  padding: 2.7rem;
}

.pb-27 {
  padding-block: 2.7rem;
}

.pi-27 {
  padding-inline: 2.7rem;
}

.pbs-27 {
  padding-block-start: 2.7rem;
}

.pbe-27 {
  padding-block-end: 2.7rem;
}

.pis-27 {
  padding-inline-start: 2.7rem;
}

.pie-27 {
  padding-inline-end: 2.7rem;
}

.p-28 {
  padding: 2.8rem;
}

.pb-28 {
  padding-block: 2.8rem;
}

.pi-28 {
  padding-inline: 2.8rem;
}

.pbs-28 {
  padding-block-start: 2.8rem;
}

.pbe-28 {
  padding-block-end: 2.8rem;
}

.pis-28 {
  padding-inline-start: 2.8rem;
}

.pie-28 {
  padding-inline-end: 2.8rem;
}

.p-29 {
  padding: 2.9rem;
}

.pb-29 {
  padding-block: 2.9rem;
}

.pi-29 {
  padding-inline: 2.9rem;
}

.pbs-29 {
  padding-block-start: 2.9rem;
}

.pbe-29 {
  padding-block-end: 2.9rem;
}

.pis-29 {
  padding-inline-start: 2.9rem;
}

.pie-29 {
  padding-inline-end: 2.9rem;
}

.p-30 {
  padding: 3rem;
}

.pb-30 {
  padding-block: 3rem;
}

.pi-30 {
  padding-inline: 3rem;
}

.pbs-30 {
  padding-block-start: 3rem;
}

.pbe-30 {
  padding-block-end: 3rem;
}

.pis-30 {
  padding-inline-start: 3rem;
}

.pie-30 {
  padding-inline-end: 3rem;
}

.p-31 {
  padding: 3.1rem;
}

.pb-31 {
  padding-block: 3.1rem;
}

.pi-31 {
  padding-inline: 3.1rem;
}

.pbs-31 {
  padding-block-start: 3.1rem;
}

.pbe-31 {
  padding-block-end: 3.1rem;
}

.pis-31 {
  padding-inline-start: 3.1rem;
}

.pie-31 {
  padding-inline-end: 3.1rem;
}

.p-32 {
  padding: 3.2rem;
}

.pb-32 {
  padding-block: 3.2rem;
}

.pi-32 {
  padding-inline: 3.2rem;
}

.pbs-32 {
  padding-block-start: 3.2rem;
}

.pbe-32 {
  padding-block-end: 3.2rem;
}

.pis-32 {
  padding-inline-start: 3.2rem;
}

.pie-32 {
  padding-inline-end: 3.2rem;
}

.p-33 {
  padding: 3.3rem;
}

.pb-33 {
  padding-block: 3.3rem;
}

.pi-33 {
  padding-inline: 3.3rem;
}

.pbs-33 {
  padding-block-start: 3.3rem;
}

.pbe-33 {
  padding-block-end: 3.3rem;
}

.pis-33 {
  padding-inline-start: 3.3rem;
}

.pie-33 {
  padding-inline-end: 3.3rem;
}

.p-34 {
  padding: 3.4rem;
}

.pb-34 {
  padding-block: 3.4rem;
}

.pi-34 {
  padding-inline: 3.4rem;
}

.pbs-34 {
  padding-block-start: 3.4rem;
}

.pbe-34 {
  padding-block-end: 3.4rem;
}

.pis-34 {
  padding-inline-start: 3.4rem;
}

.pie-34 {
  padding-inline-end: 3.4rem;
}

.p-35 {
  padding: 3.5rem;
}

.pb-35 {
  padding-block: 3.5rem;
}

.pi-35 {
  padding-inline: 3.5rem;
}

.pbs-35 {
  padding-block-start: 3.5rem;
}

.pbe-35 {
  padding-block-end: 3.5rem;
}

.pis-35 {
  padding-inline-start: 3.5rem;
}

.pie-35 {
  padding-inline-end: 3.5rem;
}

.p-36 {
  padding: 3.6rem;
}

.pb-36 {
  padding-block: 3.6rem;
}

.pi-36 {
  padding-inline: 3.6rem;
}

.pbs-36 {
  padding-block-start: 3.6rem;
}

.pbe-36 {
  padding-block-end: 3.6rem;
}

.pis-36 {
  padding-inline-start: 3.6rem;
}

.pie-36 {
  padding-inline-end: 3.6rem;
}

.p-37 {
  padding: 3.7rem;
}

.pb-37 {
  padding-block: 3.7rem;
}

.pi-37 {
  padding-inline: 3.7rem;
}

.pbs-37 {
  padding-block-start: 3.7rem;
}

.pbe-37 {
  padding-block-end: 3.7rem;
}

.pis-37 {
  padding-inline-start: 3.7rem;
}

.pie-37 {
  padding-inline-end: 3.7rem;
}

.p-38 {
  padding: 3.8rem;
}

.pb-38 {
  padding-block: 3.8rem;
}

.pi-38 {
  padding-inline: 3.8rem;
}

.pbs-38 {
  padding-block-start: 3.8rem;
}

.pbe-38 {
  padding-block-end: 3.8rem;
}

.pis-38 {
  padding-inline-start: 3.8rem;
}

.pie-38 {
  padding-inline-end: 3.8rem;
}

.p-39 {
  padding: 3.9rem;
}

.pb-39 {
  padding-block: 3.9rem;
}

.pi-39 {
  padding-inline: 3.9rem;
}

.pbs-39 {
  padding-block-start: 3.9rem;
}

.pbe-39 {
  padding-block-end: 3.9rem;
}

.pis-39 {
  padding-inline-start: 3.9rem;
}

.pie-39 {
  padding-inline-end: 3.9rem;
}

.p-40 {
  padding: 4rem;
}

.pb-40 {
  padding-block: 4rem;
}

.pi-40 {
  padding-inline: 4rem;
}

.pbs-40 {
  padding-block-start: 4rem;
}

.pbe-40 {
  padding-block-end: 4rem;
}

.pis-40 {
  padding-inline-start: 4rem;
}

.pie-40 {
  padding-inline-end: 4rem;
}

.p-41 {
  padding: 4.1rem;
}

.pb-41 {
  padding-block: 4.1rem;
}

.pi-41 {
  padding-inline: 4.1rem;
}

.pbs-41 {
  padding-block-start: 4.1rem;
}

.pbe-41 {
  padding-block-end: 4.1rem;
}

.pis-41 {
  padding-inline-start: 4.1rem;
}

.pie-41 {
  padding-inline-end: 4.1rem;
}

.p-42 {
  padding: 4.2rem;
}

.pb-42 {
  padding-block: 4.2rem;
}

.pi-42 {
  padding-inline: 4.2rem;
}

.pbs-42 {
  padding-block-start: 4.2rem;
}

.pbe-42 {
  padding-block-end: 4.2rem;
}

.pis-42 {
  padding-inline-start: 4.2rem;
}

.pie-42 {
  padding-inline-end: 4.2rem;
}

.p-43 {
  padding: 4.3rem;
}

.pb-43 {
  padding-block: 4.3rem;
}

.pi-43 {
  padding-inline: 4.3rem;
}

.pbs-43 {
  padding-block-start: 4.3rem;
}

.pbe-43 {
  padding-block-end: 4.3rem;
}

.pis-43 {
  padding-inline-start: 4.3rem;
}

.pie-43 {
  padding-inline-end: 4.3rem;
}

.p-44 {
  padding: 4.4rem;
}

.pb-44 {
  padding-block: 4.4rem;
}

.pi-44 {
  padding-inline: 4.4rem;
}

.pbs-44 {
  padding-block-start: 4.4rem;
}

.pbe-44 {
  padding-block-end: 4.4rem;
}

.pis-44 {
  padding-inline-start: 4.4rem;
}

.pie-44 {
  padding-inline-end: 4.4rem;
}

.p-45 {
  padding: 4.5rem;
}

.pb-45 {
  padding-block: 4.5rem;
}

.pi-45 {
  padding-inline: 4.5rem;
}

.pbs-45 {
  padding-block-start: 4.5rem;
}

.pbe-45 {
  padding-block-end: 4.5rem;
}

.pis-45 {
  padding-inline-start: 4.5rem;
}

.pie-45 {
  padding-inline-end: 4.5rem;
}

.p-46 {
  padding: 4.6rem;
}

.pb-46 {
  padding-block: 4.6rem;
}

.pi-46 {
  padding-inline: 4.6rem;
}

.pbs-46 {
  padding-block-start: 4.6rem;
}

.pbe-46 {
  padding-block-end: 4.6rem;
}

.pis-46 {
  padding-inline-start: 4.6rem;
}

.pie-46 {
  padding-inline-end: 4.6rem;
}

.p-47 {
  padding: 4.7rem;
}

.pb-47 {
  padding-block: 4.7rem;
}

.pi-47 {
  padding-inline: 4.7rem;
}

.pbs-47 {
  padding-block-start: 4.7rem;
}

.pbe-47 {
  padding-block-end: 4.7rem;
}

.pis-47 {
  padding-inline-start: 4.7rem;
}

.pie-47 {
  padding-inline-end: 4.7rem;
}

.p-48 {
  padding: 4.8rem;
}

.pb-48 {
  padding-block: 4.8rem;
}

.pi-48 {
  padding-inline: 4.8rem;
}

.pbs-48 {
  padding-block-start: 4.8rem;
}

.pbe-48 {
  padding-block-end: 4.8rem;
}

.pis-48 {
  padding-inline-start: 4.8rem;
}

.pie-48 {
  padding-inline-end: 4.8rem;
}

.p-49 {
  padding: 4.9rem;
}

.pb-49 {
  padding-block: 4.9rem;
}

.pi-49 {
  padding-inline: 4.9rem;
}

.pbs-49 {
  padding-block-start: 4.9rem;
}

.pbe-49 {
  padding-block-end: 4.9rem;
}

.pis-49 {
  padding-inline-start: 4.9rem;
}

.pie-49 {
  padding-inline-end: 4.9rem;
}

.p-50 {
  padding: 5rem;
}

.pb-50 {
  padding-block: 5rem;
}

.pi-50 {
  padding-inline: 5rem;
}

.pbs-50 {
  padding-block-start: 5rem;
}

.pbe-50 {
  padding-block-end: 5rem;
}

.pis-50 {
  padding-inline-start: 5rem;
}

.pie-50 {
  padding-inline-end: 5rem;
}

.p-51 {
  padding: 5.1rem;
}

.pb-51 {
  padding-block: 5.1rem;
}

.pi-51 {
  padding-inline: 5.1rem;
}

.pbs-51 {
  padding-block-start: 5.1rem;
}

.pbe-51 {
  padding-block-end: 5.1rem;
}

.pis-51 {
  padding-inline-start: 5.1rem;
}

.pie-51 {
  padding-inline-end: 5.1rem;
}

.p-52 {
  padding: 5.2rem;
}

.pb-52 {
  padding-block: 5.2rem;
}

.pi-52 {
  padding-inline: 5.2rem;
}

.pbs-52 {
  padding-block-start: 5.2rem;
}

.pbe-52 {
  padding-block-end: 5.2rem;
}

.pis-52 {
  padding-inline-start: 5.2rem;
}

.pie-52 {
  padding-inline-end: 5.2rem;
}

.p-53 {
  padding: 5.3rem;
}

.pb-53 {
  padding-block: 5.3rem;
}

.pi-53 {
  padding-inline: 5.3rem;
}

.pbs-53 {
  padding-block-start: 5.3rem;
}

.pbe-53 {
  padding-block-end: 5.3rem;
}

.pis-53 {
  padding-inline-start: 5.3rem;
}

.pie-53 {
  padding-inline-end: 5.3rem;
}

.p-54 {
  padding: 5.4rem;
}

.pb-54 {
  padding-block: 5.4rem;
}

.pi-54 {
  padding-inline: 5.4rem;
}

.pbs-54 {
  padding-block-start: 5.4rem;
}

.pbe-54 {
  padding-block-end: 5.4rem;
}

.pis-54 {
  padding-inline-start: 5.4rem;
}

.pie-54 {
  padding-inline-end: 5.4rem;
}

.p-55 {
  padding: 5.5rem;
}

.pb-55 {
  padding-block: 5.5rem;
}

.pi-55 {
  padding-inline: 5.5rem;
}

.pbs-55 {
  padding-block-start: 5.5rem;
}

.pbe-55 {
  padding-block-end: 5.5rem;
}

.pis-55 {
  padding-inline-start: 5.5rem;
}

.pie-55 {
  padding-inline-end: 5.5rem;
}

.p-56 {
  padding: 5.6rem;
}

.pb-56 {
  padding-block: 5.6rem;
}

.pi-56 {
  padding-inline: 5.6rem;
}

.pbs-56 {
  padding-block-start: 5.6rem;
}

.pbe-56 {
  padding-block-end: 5.6rem;
}

.pis-56 {
  padding-inline-start: 5.6rem;
}

.pie-56 {
  padding-inline-end: 5.6rem;
}

.p-57 {
  padding: 5.7rem;
}

.pb-57 {
  padding-block: 5.7rem;
}

.pi-57 {
  padding-inline: 5.7rem;
}

.pbs-57 {
  padding-block-start: 5.7rem;
}

.pbe-57 {
  padding-block-end: 5.7rem;
}

.pis-57 {
  padding-inline-start: 5.7rem;
}

.pie-57 {
  padding-inline-end: 5.7rem;
}

.p-58 {
  padding: 5.8rem;
}

.pb-58 {
  padding-block: 5.8rem;
}

.pi-58 {
  padding-inline: 5.8rem;
}

.pbs-58 {
  padding-block-start: 5.8rem;
}

.pbe-58 {
  padding-block-end: 5.8rem;
}

.pis-58 {
  padding-inline-start: 5.8rem;
}

.pie-58 {
  padding-inline-end: 5.8rem;
}

.p-59 {
  padding: 5.9rem;
}

.pb-59 {
  padding-block: 5.9rem;
}

.pi-59 {
  padding-inline: 5.9rem;
}

.pbs-59 {
  padding-block-start: 5.9rem;
}

.pbe-59 {
  padding-block-end: 5.9rem;
}

.pis-59 {
  padding-inline-start: 5.9rem;
}

.pie-59 {
  padding-inline-end: 5.9rem;
}

.p-60 {
  padding: 6rem;
}

.pb-60 {
  padding-block: 6rem;
}

.pi-60 {
  padding-inline: 6rem;
}

.pbs-60 {
  padding-block-start: 6rem;
}

.pbe-60 {
  padding-block-end: 6rem;
}

.pis-60 {
  padding-inline-start: 6rem;
}

.pie-60 {
  padding-inline-end: 6rem;
}

.p-61 {
  padding: 6.1rem;
}

.pb-61 {
  padding-block: 6.1rem;
}

.pi-61 {
  padding-inline: 6.1rem;
}

.pbs-61 {
  padding-block-start: 6.1rem;
}

.pbe-61 {
  padding-block-end: 6.1rem;
}

.pis-61 {
  padding-inline-start: 6.1rem;
}

.pie-61 {
  padding-inline-end: 6.1rem;
}

.p-62 {
  padding: 6.2rem;
}

.pb-62 {
  padding-block: 6.2rem;
}

.pi-62 {
  padding-inline: 6.2rem;
}

.pbs-62 {
  padding-block-start: 6.2rem;
}

.pbe-62 {
  padding-block-end: 6.2rem;
}

.pis-62 {
  padding-inline-start: 6.2rem;
}

.pie-62 {
  padding-inline-end: 6.2rem;
}

.p-63 {
  padding: 6.3rem;
}

.pb-63 {
  padding-block: 6.3rem;
}

.pi-63 {
  padding-inline: 6.3rem;
}

.pbs-63 {
  padding-block-start: 6.3rem;
}

.pbe-63 {
  padding-block-end: 6.3rem;
}

.pis-63 {
  padding-inline-start: 6.3rem;
}

.pie-63 {
  padding-inline-end: 6.3rem;
}

.p-64 {
  padding: 6.4rem;
}

.pb-64 {
  padding-block: 6.4rem;
}

.pi-64 {
  padding-inline: 6.4rem;
}

.pbs-64 {
  padding-block-start: 6.4rem;
}

.pbe-64 {
  padding-block-end: 6.4rem;
}

.pis-64 {
  padding-inline-start: 6.4rem;
}

.pie-64 {
  padding-inline-end: 6.4rem;
}

.p-65 {
  padding: 6.5rem;
}

.pb-65 {
  padding-block: 6.5rem;
}

.pi-65 {
  padding-inline: 6.5rem;
}

.pbs-65 {
  padding-block-start: 6.5rem;
}

.pbe-65 {
  padding-block-end: 6.5rem;
}

.pis-65 {
  padding-inline-start: 6.5rem;
}

.pie-65 {
  padding-inline-end: 6.5rem;
}

.p-66 {
  padding: 6.6rem;
}

.pb-66 {
  padding-block: 6.6rem;
}

.pi-66 {
  padding-inline: 6.6rem;
}

.pbs-66 {
  padding-block-start: 6.6rem;
}

.pbe-66 {
  padding-block-end: 6.6rem;
}

.pis-66 {
  padding-inline-start: 6.6rem;
}

.pie-66 {
  padding-inline-end: 6.6rem;
}

.p-67 {
  padding: 6.7rem;
}

.pb-67 {
  padding-block: 6.7rem;
}

.pi-67 {
  padding-inline: 6.7rem;
}

.pbs-67 {
  padding-block-start: 6.7rem;
}

.pbe-67 {
  padding-block-end: 6.7rem;
}

.pis-67 {
  padding-inline-start: 6.7rem;
}

.pie-67 {
  padding-inline-end: 6.7rem;
}

.p-68 {
  padding: 6.8rem;
}

.pb-68 {
  padding-block: 6.8rem;
}

.pi-68 {
  padding-inline: 6.8rem;
}

.pbs-68 {
  padding-block-start: 6.8rem;
}

.pbe-68 {
  padding-block-end: 6.8rem;
}

.pis-68 {
  padding-inline-start: 6.8rem;
}

.pie-68 {
  padding-inline-end: 6.8rem;
}

.p-69 {
  padding: 6.9rem;
}

.pb-69 {
  padding-block: 6.9rem;
}

.pi-69 {
  padding-inline: 6.9rem;
}

.pbs-69 {
  padding-block-start: 6.9rem;
}

.pbe-69 {
  padding-block-end: 6.9rem;
}

.pis-69 {
  padding-inline-start: 6.9rem;
}

.pie-69 {
  padding-inline-end: 6.9rem;
}

.p-70 {
  padding: 7rem;
}

.pb-70 {
  padding-block: 7rem;
}

.pi-70 {
  padding-inline: 7rem;
}

.pbs-70 {
  padding-block-start: 7rem;
}

.pbe-70 {
  padding-block-end: 7rem;
}

.pis-70 {
  padding-inline-start: 7rem;
}

.pie-70 {
  padding-inline-end: 7rem;
}

.p-71 {
  padding: 7.1rem;
}

.pb-71 {
  padding-block: 7.1rem;
}

.pi-71 {
  padding-inline: 7.1rem;
}

.pbs-71 {
  padding-block-start: 7.1rem;
}

.pbe-71 {
  padding-block-end: 7.1rem;
}

.pis-71 {
  padding-inline-start: 7.1rem;
}

.pie-71 {
  padding-inline-end: 7.1rem;
}

.p-72 {
  padding: 7.2rem;
}

.pb-72 {
  padding-block: 7.2rem;
}

.pi-72 {
  padding-inline: 7.2rem;
}

.pbs-72 {
  padding-block-start: 7.2rem;
}

.pbe-72 {
  padding-block-end: 7.2rem;
}

.pis-72 {
  padding-inline-start: 7.2rem;
}

.pie-72 {
  padding-inline-end: 7.2rem;
}

.p-73 {
  padding: 7.3rem;
}

.pb-73 {
  padding-block: 7.3rem;
}

.pi-73 {
  padding-inline: 7.3rem;
}

.pbs-73 {
  padding-block-start: 7.3rem;
}

.pbe-73 {
  padding-block-end: 7.3rem;
}

.pis-73 {
  padding-inline-start: 7.3rem;
}

.pie-73 {
  padding-inline-end: 7.3rem;
}

.p-74 {
  padding: 7.4rem;
}

.pb-74 {
  padding-block: 7.4rem;
}

.pi-74 {
  padding-inline: 7.4rem;
}

.pbs-74 {
  padding-block-start: 7.4rem;
}

.pbe-74 {
  padding-block-end: 7.4rem;
}

.pis-74 {
  padding-inline-start: 7.4rem;
}

.pie-74 {
  padding-inline-end: 7.4rem;
}

.p-75 {
  padding: 7.5rem;
}

.pb-75 {
  padding-block: 7.5rem;
}

.pi-75 {
  padding-inline: 7.5rem;
}

.pbs-75 {
  padding-block-start: 7.5rem;
}

.pbe-75 {
  padding-block-end: 7.5rem;
}

.pis-75 {
  padding-inline-start: 7.5rem;
}

.pie-75 {
  padding-inline-end: 7.5rem;
}

.p-76 {
  padding: 7.6rem;
}

.pb-76 {
  padding-block: 7.6rem;
}

.pi-76 {
  padding-inline: 7.6rem;
}

.pbs-76 {
  padding-block-start: 7.6rem;
}

.pbe-76 {
  padding-block-end: 7.6rem;
}

.pis-76 {
  padding-inline-start: 7.6rem;
}

.pie-76 {
  padding-inline-end: 7.6rem;
}

.p-77 {
  padding: 7.7rem;
}

.pb-77 {
  padding-block: 7.7rem;
}

.pi-77 {
  padding-inline: 7.7rem;
}

.pbs-77 {
  padding-block-start: 7.7rem;
}

.pbe-77 {
  padding-block-end: 7.7rem;
}

.pis-77 {
  padding-inline-start: 7.7rem;
}

.pie-77 {
  padding-inline-end: 7.7rem;
}

.p-78 {
  padding: 7.8rem;
}

.pb-78 {
  padding-block: 7.8rem;
}

.pi-78 {
  padding-inline: 7.8rem;
}

.pbs-78 {
  padding-block-start: 7.8rem;
}

.pbe-78 {
  padding-block-end: 7.8rem;
}

.pis-78 {
  padding-inline-start: 7.8rem;
}

.pie-78 {
  padding-inline-end: 7.8rem;
}

.p-79 {
  padding: 7.9rem;
}

.pb-79 {
  padding-block: 7.9rem;
}

.pi-79 {
  padding-inline: 7.9rem;
}

.pbs-79 {
  padding-block-start: 7.9rem;
}

.pbe-79 {
  padding-block-end: 7.9rem;
}

.pis-79 {
  padding-inline-start: 7.9rem;
}

.pie-79 {
  padding-inline-end: 7.9rem;
}

.p-80 {
  padding: 8rem;
}

.pb-80 {
  padding-block: 8rem;
}

.pi-80 {
  padding-inline: 8rem;
}

.pbs-80 {
  padding-block-start: 8rem;
}

.pbe-80 {
  padding-block-end: 8rem;
}

.pis-80 {
  padding-inline-start: 8rem;
}

.pie-80 {
  padding-inline-end: 8rem;
}

.p-81 {
  padding: 8.1rem;
}

.pb-81 {
  padding-block: 8.1rem;
}

.pi-81 {
  padding-inline: 8.1rem;
}

.pbs-81 {
  padding-block-start: 8.1rem;
}

.pbe-81 {
  padding-block-end: 8.1rem;
}

.pis-81 {
  padding-inline-start: 8.1rem;
}

.pie-81 {
  padding-inline-end: 8.1rem;
}

.p-82 {
  padding: 8.2rem;
}

.pb-82 {
  padding-block: 8.2rem;
}

.pi-82 {
  padding-inline: 8.2rem;
}

.pbs-82 {
  padding-block-start: 8.2rem;
}

.pbe-82 {
  padding-block-end: 8.2rem;
}

.pis-82 {
  padding-inline-start: 8.2rem;
}

.pie-82 {
  padding-inline-end: 8.2rem;
}

.p-83 {
  padding: 8.3rem;
}

.pb-83 {
  padding-block: 8.3rem;
}

.pi-83 {
  padding-inline: 8.3rem;
}

.pbs-83 {
  padding-block-start: 8.3rem;
}

.pbe-83 {
  padding-block-end: 8.3rem;
}

.pis-83 {
  padding-inline-start: 8.3rem;
}

.pie-83 {
  padding-inline-end: 8.3rem;
}

.p-84 {
  padding: 8.4rem;
}

.pb-84 {
  padding-block: 8.4rem;
}

.pi-84 {
  padding-inline: 8.4rem;
}

.pbs-84 {
  padding-block-start: 8.4rem;
}

.pbe-84 {
  padding-block-end: 8.4rem;
}

.pis-84 {
  padding-inline-start: 8.4rem;
}

.pie-84 {
  padding-inline-end: 8.4rem;
}

.p-85 {
  padding: 8.5rem;
}

.pb-85 {
  padding-block: 8.5rem;
}

.pi-85 {
  padding-inline: 8.5rem;
}

.pbs-85 {
  padding-block-start: 8.5rem;
}

.pbe-85 {
  padding-block-end: 8.5rem;
}

.pis-85 {
  padding-inline-start: 8.5rem;
}

.pie-85 {
  padding-inline-end: 8.5rem;
}

.p-86 {
  padding: 8.6rem;
}

.pb-86 {
  padding-block: 8.6rem;
}

.pi-86 {
  padding-inline: 8.6rem;
}

.pbs-86 {
  padding-block-start: 8.6rem;
}

.pbe-86 {
  padding-block-end: 8.6rem;
}

.pis-86 {
  padding-inline-start: 8.6rem;
}

.pie-86 {
  padding-inline-end: 8.6rem;
}

.p-87 {
  padding: 8.7rem;
}

.pb-87 {
  padding-block: 8.7rem;
}

.pi-87 {
  padding-inline: 8.7rem;
}

.pbs-87 {
  padding-block-start: 8.7rem;
}

.pbe-87 {
  padding-block-end: 8.7rem;
}

.pis-87 {
  padding-inline-start: 8.7rem;
}

.pie-87 {
  padding-inline-end: 8.7rem;
}

.p-88 {
  padding: 8.8rem;
}

.pb-88 {
  padding-block: 8.8rem;
}

.pi-88 {
  padding-inline: 8.8rem;
}

.pbs-88 {
  padding-block-start: 8.8rem;
}

.pbe-88 {
  padding-block-end: 8.8rem;
}

.pis-88 {
  padding-inline-start: 8.8rem;
}

.pie-88 {
  padding-inline-end: 8.8rem;
}

.p-89 {
  padding: 8.9rem;
}

.pb-89 {
  padding-block: 8.9rem;
}

.pi-89 {
  padding-inline: 8.9rem;
}

.pbs-89 {
  padding-block-start: 8.9rem;
}

.pbe-89 {
  padding-block-end: 8.9rem;
}

.pis-89 {
  padding-inline-start: 8.9rem;
}

.pie-89 {
  padding-inline-end: 8.9rem;
}

.p-90 {
  padding: 9rem;
}

.pb-90 {
  padding-block: 9rem;
}

.pi-90 {
  padding-inline: 9rem;
}

.pbs-90 {
  padding-block-start: 9rem;
}

.pbe-90 {
  padding-block-end: 9rem;
}

.pis-90 {
  padding-inline-start: 9rem;
}

.pie-90 {
  padding-inline-end: 9rem;
}

.m-1 {
  margin: 0.1rem;
}

.mb-1 {
  margin-block: 0.1rem;
}

.mi-1 {
  margin-inline: 0.1rem;
}

.mbs-1 {
  margin-block-start: 0.1rem;
}

.mbe-1 {
  margin-block-end: 0.1rem;
}

.mis-1 {
  margin-inline-start: 0.1rem;
}

.mie-1 {
  margin-inline-end: 0.1rem;
}

.m-2 {
  margin: 0.2rem;
}

.mb-2 {
  margin-block: 0.2rem;
}

.mi-2 {
  margin-inline: 0.2rem;
}

.mbs-2 {
  margin-block-start: 0.2rem;
}

.mbe-2 {
  margin-block-end: 0.2rem;
}

.mis-2 {
  margin-inline-start: 0.2rem;
}

.mie-2 {
  margin-inline-end: 0.2rem;
}

.m-3 {
  margin: 0.3rem;
}

.mb-3 {
  margin-block: 0.3rem;
}

.mi-3 {
  margin-inline: 0.3rem;
}

.mbs-3 {
  margin-block-start: 0.3rem;
}

.mbe-3 {
  margin-block-end: 0.3rem;
}

.mis-3 {
  margin-inline-start: 0.3rem;
}

.mie-3 {
  margin-inline-end: 0.3rem;
}

.m-4 {
  margin: 0.4rem;
}

.mb-4 {
  margin-block: 0.4rem;
}

.mi-4 {
  margin-inline: 0.4rem;
}

.mbs-4 {
  margin-block-start: 0.4rem;
}

.mbe-4 {
  margin-block-end: 0.4rem;
}

.mis-4 {
  margin-inline-start: 0.4rem;
}

.mie-4 {
  margin-inline-end: 0.4rem;
}

.m-5 {
  margin: 0.5rem;
}

.mb-5 {
  margin-block: 0.5rem;
}

.mi-5 {
  margin-inline: 0.5rem;
}

.mbs-5 {
  margin-block-start: 0.5rem;
}

.mbe-5 {
  margin-block-end: 0.5rem;
}

.mis-5 {
  margin-inline-start: 0.5rem;
}

.mie-5 {
  margin-inline-end: 0.5rem;
}

.m-6 {
  margin: 0.6rem;
}

.mb-6 {
  margin-block: 0.6rem;
}

.mi-6 {
  margin-inline: 0.6rem;
}

.mbs-6 {
  margin-block-start: 0.6rem;
}

.mbe-6 {
  margin-block-end: 0.6rem;
}

.mis-6 {
  margin-inline-start: 0.6rem;
}

.mie-6 {
  margin-inline-end: 0.6rem;
}

.m-7 {
  margin: 0.7rem;
}

.mb-7 {
  margin-block: 0.7rem;
}

.mi-7 {
  margin-inline: 0.7rem;
}

.mbs-7 {
  margin-block-start: 0.7rem;
}

.mbe-7 {
  margin-block-end: 0.7rem;
}

.mis-7 {
  margin-inline-start: 0.7rem;
}

.mie-7 {
  margin-inline-end: 0.7rem;
}

.m-8 {
  margin: 0.8rem;
}

.mb-8 {
  margin-block: 0.8rem;
}

.mi-8 {
  margin-inline: 0.8rem;
}

.mbs-8 {
  margin-block-start: 0.8rem;
}

.mbe-8 {
  margin-block-end: 0.8rem;
}

.mis-8 {
  margin-inline-start: 0.8rem;
}

.mie-8 {
  margin-inline-end: 0.8rem;
}

.m-9 {
  margin: 0.9rem;
}

.mb-9 {
  margin-block: 0.9rem;
}

.mi-9 {
  margin-inline: 0.9rem;
}

.mbs-9 {
  margin-block-start: 0.9rem;
}

.mbe-9 {
  margin-block-end: 0.9rem;
}

.mis-9 {
  margin-inline-start: 0.9rem;
}

.mie-9 {
  margin-inline-end: 0.9rem;
}

.m-10 {
  margin: 1rem;
}

.mb-10 {
  margin-block: 1rem;
}

.mi-10 {
  margin-inline: 1rem;
}

.mbs-10 {
  margin-block-start: 1rem;
}

.mbe-10 {
  margin-block-end: 1rem;
}

.mis-10 {
  margin-inline-start: 1rem;
}

.mie-10 {
  margin-inline-end: 1rem;
}

.m-11 {
  margin: 1.1rem;
}

.mb-11 {
  margin-block: 1.1rem;
}

.mi-11 {
  margin-inline: 1.1rem;
}

.mbs-11 {
  margin-block-start: 1.1rem;
}

.mbe-11 {
  margin-block-end: 1.1rem;
}

.mis-11 {
  margin-inline-start: 1.1rem;
}

.mie-11 {
  margin-inline-end: 1.1rem;
}

.m-12 {
  margin: 1.2rem;
}

.mb-12 {
  margin-block: 1.2rem;
}

.mi-12 {
  margin-inline: 1.2rem;
}

.mbs-12 {
  margin-block-start: 1.2rem;
}

.mbe-12 {
  margin-block-end: 1.2rem;
}

.mis-12 {
  margin-inline-start: 1.2rem;
}

.mie-12 {
  margin-inline-end: 1.2rem;
}

.m-13 {
  margin: 1.3rem;
}

.mb-13 {
  margin-block: 1.3rem;
}

.mi-13 {
  margin-inline: 1.3rem;
}

.mbs-13 {
  margin-block-start: 1.3rem;
}

.mbe-13 {
  margin-block-end: 1.3rem;
}

.mis-13 {
  margin-inline-start: 1.3rem;
}

.mie-13 {
  margin-inline-end: 1.3rem;
}

.m-14 {
  margin: 1.4rem;
}

.mb-14 {
  margin-block: 1.4rem;
}

.mi-14 {
  margin-inline: 1.4rem;
}

.mbs-14 {
  margin-block-start: 1.4rem;
}

.mbe-14 {
  margin-block-end: 1.4rem;
}

.mis-14 {
  margin-inline-start: 1.4rem;
}

.mie-14 {
  margin-inline-end: 1.4rem;
}

.m-15 {
  margin: 1.5rem;
}

.mb-15 {
  margin-block: 1.5rem;
}

.mi-15 {
  margin-inline: 1.5rem;
}

.mbs-15 {
  margin-block-start: 1.5rem;
}

.mbe-15 {
  margin-block-end: 1.5rem;
}

.mis-15 {
  margin-inline-start: 1.5rem;
}

.mie-15 {
  margin-inline-end: 1.5rem;
}

.m-16 {
  margin: 1.6rem;
}

.mb-16 {
  margin-block: 1.6rem;
}

.mi-16 {
  margin-inline: 1.6rem;
}

.mbs-16 {
  margin-block-start: 1.6rem;
}

.mbe-16 {
  margin-block-end: 1.6rem;
}

.mis-16 {
  margin-inline-start: 1.6rem;
}

.mie-16 {
  margin-inline-end: 1.6rem;
}

.m-17 {
  margin: 1.7rem;
}

.mb-17 {
  margin-block: 1.7rem;
}

.mi-17 {
  margin-inline: 1.7rem;
}

.mbs-17 {
  margin-block-start: 1.7rem;
}

.mbe-17 {
  margin-block-end: 1.7rem;
}

.mis-17 {
  margin-inline-start: 1.7rem;
}

.mie-17 {
  margin-inline-end: 1.7rem;
}

.m-18 {
  margin: 1.8rem;
}

.mb-18 {
  margin-block: 1.8rem;
}

.mi-18 {
  margin-inline: 1.8rem;
}

.mbs-18 {
  margin-block-start: 1.8rem;
}

.mbe-18 {
  margin-block-end: 1.8rem;
}

.mis-18 {
  margin-inline-start: 1.8rem;
}

.mie-18 {
  margin-inline-end: 1.8rem;
}

.m-19 {
  margin: 1.9rem;
}

.mb-19 {
  margin-block: 1.9rem;
}

.mi-19 {
  margin-inline: 1.9rem;
}

.mbs-19 {
  margin-block-start: 1.9rem;
}

.mbe-19 {
  margin-block-end: 1.9rem;
}

.mis-19 {
  margin-inline-start: 1.9rem;
}

.mie-19 {
  margin-inline-end: 1.9rem;
}

.m-20 {
  margin: 2rem;
}

.mb-20 {
  margin-block: 2rem;
}

.mi-20 {
  margin-inline: 2rem;
}

.mbs-20 {
  margin-block-start: 2rem;
}

.mbe-20 {
  margin-block-end: 2rem;
}

.mis-20 {
  margin-inline-start: 2rem;
}

.mie-20 {
  margin-inline-end: 2rem;
}

.m-21 {
  margin: 2.1rem;
}

.mb-21 {
  margin-block: 2.1rem;
}

.mi-21 {
  margin-inline: 2.1rem;
}

.mbs-21 {
  margin-block-start: 2.1rem;
}

.mbe-21 {
  margin-block-end: 2.1rem;
}

.mis-21 {
  margin-inline-start: 2.1rem;
}

.mie-21 {
  margin-inline-end: 2.1rem;
}

.m-22 {
  margin: 2.2rem;
}

.mb-22 {
  margin-block: 2.2rem;
}

.mi-22 {
  margin-inline: 2.2rem;
}

.mbs-22 {
  margin-block-start: 2.2rem;
}

.mbe-22 {
  margin-block-end: 2.2rem;
}

.mis-22 {
  margin-inline-start: 2.2rem;
}

.mie-22 {
  margin-inline-end: 2.2rem;
}

.m-23 {
  margin: 2.3rem;
}

.mb-23 {
  margin-block: 2.3rem;
}

.mi-23 {
  margin-inline: 2.3rem;
}

.mbs-23 {
  margin-block-start: 2.3rem;
}

.mbe-23 {
  margin-block-end: 2.3rem;
}

.mis-23 {
  margin-inline-start: 2.3rem;
}

.mie-23 {
  margin-inline-end: 2.3rem;
}

.m-24 {
  margin: 2.4rem;
}

.mb-24 {
  margin-block: 2.4rem;
}

.mi-24 {
  margin-inline: 2.4rem;
}

.mbs-24 {
  margin-block-start: 2.4rem;
}

.mbe-24 {
  margin-block-end: 2.4rem;
}

.mis-24 {
  margin-inline-start: 2.4rem;
}

.mie-24 {
  margin-inline-end: 2.4rem;
}

.m-25 {
  margin: 2.5rem;
}

.mb-25 {
  margin-block: 2.5rem;
}

.mi-25 {
  margin-inline: 2.5rem;
}

.mbs-25 {
  margin-block-start: 2.5rem;
}

.mbe-25 {
  margin-block-end: 2.5rem;
}

.mis-25 {
  margin-inline-start: 2.5rem;
}

.mie-25 {
  margin-inline-end: 2.5rem;
}

.m-26 {
  margin: 2.6rem;
}

.mb-26 {
  margin-block: 2.6rem;
}

.mi-26 {
  margin-inline: 2.6rem;
}

.mbs-26 {
  margin-block-start: 2.6rem;
}

.mbe-26 {
  margin-block-end: 2.6rem;
}

.mis-26 {
  margin-inline-start: 2.6rem;
}

.mie-26 {
  margin-inline-end: 2.6rem;
}

.m-27 {
  margin: 2.7rem;
}

.mb-27 {
  margin-block: 2.7rem;
}

.mi-27 {
  margin-inline: 2.7rem;
}

.mbs-27 {
  margin-block-start: 2.7rem;
}

.mbe-27 {
  margin-block-end: 2.7rem;
}

.mis-27 {
  margin-inline-start: 2.7rem;
}

.mie-27 {
  margin-inline-end: 2.7rem;
}

.m-28 {
  margin: 2.8rem;
}

.mb-28 {
  margin-block: 2.8rem;
}

.mi-28 {
  margin-inline: 2.8rem;
}

.mbs-28 {
  margin-block-start: 2.8rem;
}

.mbe-28 {
  margin-block-end: 2.8rem;
}

.mis-28 {
  margin-inline-start: 2.8rem;
}

.mie-28 {
  margin-inline-end: 2.8rem;
}

.m-29 {
  margin: 2.9rem;
}

.mb-29 {
  margin-block: 2.9rem;
}

.mi-29 {
  margin-inline: 2.9rem;
}

.mbs-29 {
  margin-block-start: 2.9rem;
}

.mbe-29 {
  margin-block-end: 2.9rem;
}

.mis-29 {
  margin-inline-start: 2.9rem;
}

.mie-29 {
  margin-inline-end: 2.9rem;
}

.m-30 {
  margin: 3rem;
}

.mb-30 {
  margin-block: 3rem;
}

.mi-30 {
  margin-inline: 3rem;
}

.mbs-30 {
  margin-block-start: 3rem;
}

.mbe-30 {
  margin-block-end: 3rem;
}

.mis-30 {
  margin-inline-start: 3rem;
}

.mie-30 {
  margin-inline-end: 3rem;
}

.m-31 {
  margin: 3.1rem;
}

.mb-31 {
  margin-block: 3.1rem;
}

.mi-31 {
  margin-inline: 3.1rem;
}

.mbs-31 {
  margin-block-start: 3.1rem;
}

.mbe-31 {
  margin-block-end: 3.1rem;
}

.mis-31 {
  margin-inline-start: 3.1rem;
}

.mie-31 {
  margin-inline-end: 3.1rem;
}

.m-32 {
  margin: 3.2rem;
}

.mb-32 {
  margin-block: 3.2rem;
}

.mi-32 {
  margin-inline: 3.2rem;
}

.mbs-32 {
  margin-block-start: 3.2rem;
}

.mbe-32 {
  margin-block-end: 3.2rem;
}

.mis-32 {
  margin-inline-start: 3.2rem;
}

.mie-32 {
  margin-inline-end: 3.2rem;
}

.m-33 {
  margin: 3.3rem;
}

.mb-33 {
  margin-block: 3.3rem;
}

.mi-33 {
  margin-inline: 3.3rem;
}

.mbs-33 {
  margin-block-start: 3.3rem;
}

.mbe-33 {
  margin-block-end: 3.3rem;
}

.mis-33 {
  margin-inline-start: 3.3rem;
}

.mie-33 {
  margin-inline-end: 3.3rem;
}

.m-34 {
  margin: 3.4rem;
}

.mb-34 {
  margin-block: 3.4rem;
}

.mi-34 {
  margin-inline: 3.4rem;
}

.mbs-34 {
  margin-block-start: 3.4rem;
}

.mbe-34 {
  margin-block-end: 3.4rem;
}

.mis-34 {
  margin-inline-start: 3.4rem;
}

.mie-34 {
  margin-inline-end: 3.4rem;
}

.m-35 {
  margin: 3.5rem;
}

.mb-35 {
  margin-block: 3.5rem;
}

.mi-35 {
  margin-inline: 3.5rem;
}

.mbs-35 {
  margin-block-start: 3.5rem;
}

.mbe-35 {
  margin-block-end: 3.5rem;
}

.mis-35 {
  margin-inline-start: 3.5rem;
}

.mie-35 {
  margin-inline-end: 3.5rem;
}

.m-36 {
  margin: 3.6rem;
}

.mb-36 {
  margin-block: 3.6rem;
}

.mi-36 {
  margin-inline: 3.6rem;
}

.mbs-36 {
  margin-block-start: 3.6rem;
}

.mbe-36 {
  margin-block-end: 3.6rem;
}

.mis-36 {
  margin-inline-start: 3.6rem;
}

.mie-36 {
  margin-inline-end: 3.6rem;
}

.m-37 {
  margin: 3.7rem;
}

.mb-37 {
  margin-block: 3.7rem;
}

.mi-37 {
  margin-inline: 3.7rem;
}

.mbs-37 {
  margin-block-start: 3.7rem;
}

.mbe-37 {
  margin-block-end: 3.7rem;
}

.mis-37 {
  margin-inline-start: 3.7rem;
}

.mie-37 {
  margin-inline-end: 3.7rem;
}

.m-38 {
  margin: 3.8rem;
}

.mb-38 {
  margin-block: 3.8rem;
}

.mi-38 {
  margin-inline: 3.8rem;
}

.mbs-38 {
  margin-block-start: 3.8rem;
}

.mbe-38 {
  margin-block-end: 3.8rem;
}

.mis-38 {
  margin-inline-start: 3.8rem;
}

.mie-38 {
  margin-inline-end: 3.8rem;
}

.m-39 {
  margin: 3.9rem;
}

.mb-39 {
  margin-block: 3.9rem;
}

.mi-39 {
  margin-inline: 3.9rem;
}

.mbs-39 {
  margin-block-start: 3.9rem;
}

.mbe-39 {
  margin-block-end: 3.9rem;
}

.mis-39 {
  margin-inline-start: 3.9rem;
}

.mie-39 {
  margin-inline-end: 3.9rem;
}

.m-40 {
  margin: 4rem;
}

.mb-40 {
  margin-block: 4rem;
}

.mi-40 {
  margin-inline: 4rem;
}

.mbs-40 {
  margin-block-start: 4rem;
}

.mbe-40 {
  margin-block-end: 4rem;
}

.mis-40 {
  margin-inline-start: 4rem;
}

.mie-40 {
  margin-inline-end: 4rem;
}

.m-41 {
  margin: 4.1rem;
}

.mb-41 {
  margin-block: 4.1rem;
}

.mi-41 {
  margin-inline: 4.1rem;
}

.mbs-41 {
  margin-block-start: 4.1rem;
}

.mbe-41 {
  margin-block-end: 4.1rem;
}

.mis-41 {
  margin-inline-start: 4.1rem;
}

.mie-41 {
  margin-inline-end: 4.1rem;
}

.m-42 {
  margin: 4.2rem;
}

.mb-42 {
  margin-block: 4.2rem;
}

.mi-42 {
  margin-inline: 4.2rem;
}

.mbs-42 {
  margin-block-start: 4.2rem;
}

.mbe-42 {
  margin-block-end: 4.2rem;
}

.mis-42 {
  margin-inline-start: 4.2rem;
}

.mie-42 {
  margin-inline-end: 4.2rem;
}

.m-43 {
  margin: 4.3rem;
}

.mb-43 {
  margin-block: 4.3rem;
}

.mi-43 {
  margin-inline: 4.3rem;
}

.mbs-43 {
  margin-block-start: 4.3rem;
}

.mbe-43 {
  margin-block-end: 4.3rem;
}

.mis-43 {
  margin-inline-start: 4.3rem;
}

.mie-43 {
  margin-inline-end: 4.3rem;
}

.m-44 {
  margin: 4.4rem;
}

.mb-44 {
  margin-block: 4.4rem;
}

.mi-44 {
  margin-inline: 4.4rem;
}

.mbs-44 {
  margin-block-start: 4.4rem;
}

.mbe-44 {
  margin-block-end: 4.4rem;
}

.mis-44 {
  margin-inline-start: 4.4rem;
}

.mie-44 {
  margin-inline-end: 4.4rem;
}

.m-45 {
  margin: 4.5rem;
}

.mb-45 {
  margin-block: 4.5rem;
}

.mi-45 {
  margin-inline: 4.5rem;
}

.mbs-45 {
  margin-block-start: 4.5rem;
}

.mbe-45 {
  margin-block-end: 4.5rem;
}

.mis-45 {
  margin-inline-start: 4.5rem;
}

.mie-45 {
  margin-inline-end: 4.5rem;
}

.m-46 {
  margin: 4.6rem;
}

.mb-46 {
  margin-block: 4.6rem;
}

.mi-46 {
  margin-inline: 4.6rem;
}

.mbs-46 {
  margin-block-start: 4.6rem;
}

.mbe-46 {
  margin-block-end: 4.6rem;
}

.mis-46 {
  margin-inline-start: 4.6rem;
}

.mie-46 {
  margin-inline-end: 4.6rem;
}

.m-47 {
  margin: 4.7rem;
}

.mb-47 {
  margin-block: 4.7rem;
}

.mi-47 {
  margin-inline: 4.7rem;
}

.mbs-47 {
  margin-block-start: 4.7rem;
}

.mbe-47 {
  margin-block-end: 4.7rem;
}

.mis-47 {
  margin-inline-start: 4.7rem;
}

.mie-47 {
  margin-inline-end: 4.7rem;
}

.m-48 {
  margin: 4.8rem;
}

.mb-48 {
  margin-block: 4.8rem;
}

.mi-48 {
  margin-inline: 4.8rem;
}

.mbs-48 {
  margin-block-start: 4.8rem;
}

.mbe-48 {
  margin-block-end: 4.8rem;
}

.mis-48 {
  margin-inline-start: 4.8rem;
}

.mie-48 {
  margin-inline-end: 4.8rem;
}

.m-49 {
  margin: 4.9rem;
}

.mb-49 {
  margin-block: 4.9rem;
}

.mi-49 {
  margin-inline: 4.9rem;
}

.mbs-49 {
  margin-block-start: 4.9rem;
}

.mbe-49 {
  margin-block-end: 4.9rem;
}

.mis-49 {
  margin-inline-start: 4.9rem;
}

.mie-49 {
  margin-inline-end: 4.9rem;
}

.m-50 {
  margin: 5rem;
}

.mb-50 {
  margin-block: 5rem;
}

.mi-50 {
  margin-inline: 5rem;
}

.mbs-50 {
  margin-block-start: 5rem;
}

.mbe-50 {
  margin-block-end: 5rem;
}

.mis-50 {
  margin-inline-start: 5rem;
}

.mie-50 {
  margin-inline-end: 5rem;
}

.m-51 {
  margin: 5.1rem;
}

.mb-51 {
  margin-block: 5.1rem;
}

.mi-51 {
  margin-inline: 5.1rem;
}

.mbs-51 {
  margin-block-start: 5.1rem;
}

.mbe-51 {
  margin-block-end: 5.1rem;
}

.mis-51 {
  margin-inline-start: 5.1rem;
}

.mie-51 {
  margin-inline-end: 5.1rem;
}

.m-52 {
  margin: 5.2rem;
}

.mb-52 {
  margin-block: 5.2rem;
}

.mi-52 {
  margin-inline: 5.2rem;
}

.mbs-52 {
  margin-block-start: 5.2rem;
}

.mbe-52 {
  margin-block-end: 5.2rem;
}

.mis-52 {
  margin-inline-start: 5.2rem;
}

.mie-52 {
  margin-inline-end: 5.2rem;
}

.m-53 {
  margin: 5.3rem;
}

.mb-53 {
  margin-block: 5.3rem;
}

.mi-53 {
  margin-inline: 5.3rem;
}

.mbs-53 {
  margin-block-start: 5.3rem;
}

.mbe-53 {
  margin-block-end: 5.3rem;
}

.mis-53 {
  margin-inline-start: 5.3rem;
}

.mie-53 {
  margin-inline-end: 5.3rem;
}

.m-54 {
  margin: 5.4rem;
}

.mb-54 {
  margin-block: 5.4rem;
}

.mi-54 {
  margin-inline: 5.4rem;
}

.mbs-54 {
  margin-block-start: 5.4rem;
}

.mbe-54 {
  margin-block-end: 5.4rem;
}

.mis-54 {
  margin-inline-start: 5.4rem;
}

.mie-54 {
  margin-inline-end: 5.4rem;
}

.m-55 {
  margin: 5.5rem;
}

.mb-55 {
  margin-block: 5.5rem;
}

.mi-55 {
  margin-inline: 5.5rem;
}

.mbs-55 {
  margin-block-start: 5.5rem;
}

.mbe-55 {
  margin-block-end: 5.5rem;
}

.mis-55 {
  margin-inline-start: 5.5rem;
}

.mie-55 {
  margin-inline-end: 5.5rem;
}

.m-56 {
  margin: 5.6rem;
}

.mb-56 {
  margin-block: 5.6rem;
}

.mi-56 {
  margin-inline: 5.6rem;
}

.mbs-56 {
  margin-block-start: 5.6rem;
}

.mbe-56 {
  margin-block-end: 5.6rem;
}

.mis-56 {
  margin-inline-start: 5.6rem;
}

.mie-56 {
  margin-inline-end: 5.6rem;
}

.m-57 {
  margin: 5.7rem;
}

.mb-57 {
  margin-block: 5.7rem;
}

.mi-57 {
  margin-inline: 5.7rem;
}

.mbs-57 {
  margin-block-start: 5.7rem;
}

.mbe-57 {
  margin-block-end: 5.7rem;
}

.mis-57 {
  margin-inline-start: 5.7rem;
}

.mie-57 {
  margin-inline-end: 5.7rem;
}

.m-58 {
  margin: 5.8rem;
}

.mb-58 {
  margin-block: 5.8rem;
}

.mi-58 {
  margin-inline: 5.8rem;
}

.mbs-58 {
  margin-block-start: 5.8rem;
}

.mbe-58 {
  margin-block-end: 5.8rem;
}

.mis-58 {
  margin-inline-start: 5.8rem;
}

.mie-58 {
  margin-inline-end: 5.8rem;
}

.m-59 {
  margin: 5.9rem;
}

.mb-59 {
  margin-block: 5.9rem;
}

.mi-59 {
  margin-inline: 5.9rem;
}

.mbs-59 {
  margin-block-start: 5.9rem;
}

.mbe-59 {
  margin-block-end: 5.9rem;
}

.mis-59 {
  margin-inline-start: 5.9rem;
}

.mie-59 {
  margin-inline-end: 5.9rem;
}

.m-60 {
  margin: 6rem;
}

.mb-60 {
  margin-block: 6rem;
}

.mi-60 {
  margin-inline: 6rem;
}

.mbs-60 {
  margin-block-start: 6rem;
}

.mbe-60 {
  margin-block-end: 6rem;
}

.mis-60 {
  margin-inline-start: 6rem;
}

.mie-60 {
  margin-inline-end: 6rem;
}

.m-61 {
  margin: 6.1rem;
}

.mb-61 {
  margin-block: 6.1rem;
}

.mi-61 {
  margin-inline: 6.1rem;
}

.mbs-61 {
  margin-block-start: 6.1rem;
}

.mbe-61 {
  margin-block-end: 6.1rem;
}

.mis-61 {
  margin-inline-start: 6.1rem;
}

.mie-61 {
  margin-inline-end: 6.1rem;
}

.m-62 {
  margin: 6.2rem;
}

.mb-62 {
  margin-block: 6.2rem;
}

.mi-62 {
  margin-inline: 6.2rem;
}

.mbs-62 {
  margin-block-start: 6.2rem;
}

.mbe-62 {
  margin-block-end: 6.2rem;
}

.mis-62 {
  margin-inline-start: 6.2rem;
}

.mie-62 {
  margin-inline-end: 6.2rem;
}

.m-63 {
  margin: 6.3rem;
}

.mb-63 {
  margin-block: 6.3rem;
}

.mi-63 {
  margin-inline: 6.3rem;
}

.mbs-63 {
  margin-block-start: 6.3rem;
}

.mbe-63 {
  margin-block-end: 6.3rem;
}

.mis-63 {
  margin-inline-start: 6.3rem;
}

.mie-63 {
  margin-inline-end: 6.3rem;
}

.m-64 {
  margin: 6.4rem;
}

.mb-64 {
  margin-block: 6.4rem;
}

.mi-64 {
  margin-inline: 6.4rem;
}

.mbs-64 {
  margin-block-start: 6.4rem;
}

.mbe-64 {
  margin-block-end: 6.4rem;
}

.mis-64 {
  margin-inline-start: 6.4rem;
}

.mie-64 {
  margin-inline-end: 6.4rem;
}

.m-65 {
  margin: 6.5rem;
}

.mb-65 {
  margin-block: 6.5rem;
}

.mi-65 {
  margin-inline: 6.5rem;
}

.mbs-65 {
  margin-block-start: 6.5rem;
}

.mbe-65 {
  margin-block-end: 6.5rem;
}

.mis-65 {
  margin-inline-start: 6.5rem;
}

.mie-65 {
  margin-inline-end: 6.5rem;
}

.m-66 {
  margin: 6.6rem;
}

.mb-66 {
  margin-block: 6.6rem;
}

.mi-66 {
  margin-inline: 6.6rem;
}

.mbs-66 {
  margin-block-start: 6.6rem;
}

.mbe-66 {
  margin-block-end: 6.6rem;
}

.mis-66 {
  margin-inline-start: 6.6rem;
}

.mie-66 {
  margin-inline-end: 6.6rem;
}

.m-67 {
  margin: 6.7rem;
}

.mb-67 {
  margin-block: 6.7rem;
}

.mi-67 {
  margin-inline: 6.7rem;
}

.mbs-67 {
  margin-block-start: 6.7rem;
}

.mbe-67 {
  margin-block-end: 6.7rem;
}

.mis-67 {
  margin-inline-start: 6.7rem;
}

.mie-67 {
  margin-inline-end: 6.7rem;
}

.m-68 {
  margin: 6.8rem;
}

.mb-68 {
  margin-block: 6.8rem;
}

.mi-68 {
  margin-inline: 6.8rem;
}

.mbs-68 {
  margin-block-start: 6.8rem;
}

.mbe-68 {
  margin-block-end: 6.8rem;
}

.mis-68 {
  margin-inline-start: 6.8rem;
}

.mie-68 {
  margin-inline-end: 6.8rem;
}

.m-69 {
  margin: 6.9rem;
}

.mb-69 {
  margin-block: 6.9rem;
}

.mi-69 {
  margin-inline: 6.9rem;
}

.mbs-69 {
  margin-block-start: 6.9rem;
}

.mbe-69 {
  margin-block-end: 6.9rem;
}

.mis-69 {
  margin-inline-start: 6.9rem;
}

.mie-69 {
  margin-inline-end: 6.9rem;
}

.m-70 {
  margin: 7rem;
}

.mb-70 {
  margin-block: 7rem;
}

.mi-70 {
  margin-inline: 7rem;
}

.mbs-70 {
  margin-block-start: 7rem;
}

.mbe-70 {
  margin-block-end: 7rem;
}

.mis-70 {
  margin-inline-start: 7rem;
}

.mie-70 {
  margin-inline-end: 7rem;
}

.m-71 {
  margin: 7.1rem;
}

.mb-71 {
  margin-block: 7.1rem;
}

.mi-71 {
  margin-inline: 7.1rem;
}

.mbs-71 {
  margin-block-start: 7.1rem;
}

.mbe-71 {
  margin-block-end: 7.1rem;
}

.mis-71 {
  margin-inline-start: 7.1rem;
}

.mie-71 {
  margin-inline-end: 7.1rem;
}

.m-72 {
  margin: 7.2rem;
}

.mb-72 {
  margin-block: 7.2rem;
}

.mi-72 {
  margin-inline: 7.2rem;
}

.mbs-72 {
  margin-block-start: 7.2rem;
}

.mbe-72 {
  margin-block-end: 7.2rem;
}

.mis-72 {
  margin-inline-start: 7.2rem;
}

.mie-72 {
  margin-inline-end: 7.2rem;
}

.m-73 {
  margin: 7.3rem;
}

.mb-73 {
  margin-block: 7.3rem;
}

.mi-73 {
  margin-inline: 7.3rem;
}

.mbs-73 {
  margin-block-start: 7.3rem;
}

.mbe-73 {
  margin-block-end: 7.3rem;
}

.mis-73 {
  margin-inline-start: 7.3rem;
}

.mie-73 {
  margin-inline-end: 7.3rem;
}

.m-74 {
  margin: 7.4rem;
}

.mb-74 {
  margin-block: 7.4rem;
}

.mi-74 {
  margin-inline: 7.4rem;
}

.mbs-74 {
  margin-block-start: 7.4rem;
}

.mbe-74 {
  margin-block-end: 7.4rem;
}

.mis-74 {
  margin-inline-start: 7.4rem;
}

.mie-74 {
  margin-inline-end: 7.4rem;
}

.m-75 {
  margin: 7.5rem;
}

.mb-75 {
  margin-block: 7.5rem;
}

.mi-75 {
  margin-inline: 7.5rem;
}

.mbs-75 {
  margin-block-start: 7.5rem;
}

.mbe-75 {
  margin-block-end: 7.5rem;
}

.mis-75 {
  margin-inline-start: 7.5rem;
}

.mie-75 {
  margin-inline-end: 7.5rem;
}

.m-76 {
  margin: 7.6rem;
}

.mb-76 {
  margin-block: 7.6rem;
}

.mi-76 {
  margin-inline: 7.6rem;
}

.mbs-76 {
  margin-block-start: 7.6rem;
}

.mbe-76 {
  margin-block-end: 7.6rem;
}

.mis-76 {
  margin-inline-start: 7.6rem;
}

.mie-76 {
  margin-inline-end: 7.6rem;
}

.m-77 {
  margin: 7.7rem;
}

.mb-77 {
  margin-block: 7.7rem;
}

.mi-77 {
  margin-inline: 7.7rem;
}

.mbs-77 {
  margin-block-start: 7.7rem;
}

.mbe-77 {
  margin-block-end: 7.7rem;
}

.mis-77 {
  margin-inline-start: 7.7rem;
}

.mie-77 {
  margin-inline-end: 7.7rem;
}

.m-78 {
  margin: 7.8rem;
}

.mb-78 {
  margin-block: 7.8rem;
}

.mi-78 {
  margin-inline: 7.8rem;
}

.mbs-78 {
  margin-block-start: 7.8rem;
}

.mbe-78 {
  margin-block-end: 7.8rem;
}

.mis-78 {
  margin-inline-start: 7.8rem;
}

.mie-78 {
  margin-inline-end: 7.8rem;
}

.m-79 {
  margin: 7.9rem;
}

.mb-79 {
  margin-block: 7.9rem;
}

.mi-79 {
  margin-inline: 7.9rem;
}

.mbs-79 {
  margin-block-start: 7.9rem;
}

.mbe-79 {
  margin-block-end: 7.9rem;
}

.mis-79 {
  margin-inline-start: 7.9rem;
}

.mie-79 {
  margin-inline-end: 7.9rem;
}

.m-80 {
  margin: 8rem;
}

.mb-80 {
  margin-block: 8rem;
}

.mi-80 {
  margin-inline: 8rem;
}

.mbs-80 {
  margin-block-start: 8rem;
}

.mbe-80 {
  margin-block-end: 8rem;
}

.mis-80 {
  margin-inline-start: 8rem;
}

.mie-80 {
  margin-inline-end: 8rem;
}

.m-81 {
  margin: 8.1rem;
}

.mb-81 {
  margin-block: 8.1rem;
}

.mi-81 {
  margin-inline: 8.1rem;
}

.mbs-81 {
  margin-block-start: 8.1rem;
}

.mbe-81 {
  margin-block-end: 8.1rem;
}

.mis-81 {
  margin-inline-start: 8.1rem;
}

.mie-81 {
  margin-inline-end: 8.1rem;
}

.m-82 {
  margin: 8.2rem;
}

.mb-82 {
  margin-block: 8.2rem;
}

.mi-82 {
  margin-inline: 8.2rem;
}

.mbs-82 {
  margin-block-start: 8.2rem;
}

.mbe-82 {
  margin-block-end: 8.2rem;
}

.mis-82 {
  margin-inline-start: 8.2rem;
}

.mie-82 {
  margin-inline-end: 8.2rem;
}

.m-83 {
  margin: 8.3rem;
}

.mb-83 {
  margin-block: 8.3rem;
}

.mi-83 {
  margin-inline: 8.3rem;
}

.mbs-83 {
  margin-block-start: 8.3rem;
}

.mbe-83 {
  margin-block-end: 8.3rem;
}

.mis-83 {
  margin-inline-start: 8.3rem;
}

.mie-83 {
  margin-inline-end: 8.3rem;
}

.m-84 {
  margin: 8.4rem;
}

.mb-84 {
  margin-block: 8.4rem;
}

.mi-84 {
  margin-inline: 8.4rem;
}

.mbs-84 {
  margin-block-start: 8.4rem;
}

.mbe-84 {
  margin-block-end: 8.4rem;
}

.mis-84 {
  margin-inline-start: 8.4rem;
}

.mie-84 {
  margin-inline-end: 8.4rem;
}

.m-85 {
  margin: 8.5rem;
}

.mb-85 {
  margin-block: 8.5rem;
}

.mi-85 {
  margin-inline: 8.5rem;
}

.mbs-85 {
  margin-block-start: 8.5rem;
}

.mbe-85 {
  margin-block-end: 8.5rem;
}

.mis-85 {
  margin-inline-start: 8.5rem;
}

.mie-85 {
  margin-inline-end: 8.5rem;
}

.m-86 {
  margin: 8.6rem;
}

.mb-86 {
  margin-block: 8.6rem;
}

.mi-86 {
  margin-inline: 8.6rem;
}

.mbs-86 {
  margin-block-start: 8.6rem;
}

.mbe-86 {
  margin-block-end: 8.6rem;
}

.mis-86 {
  margin-inline-start: 8.6rem;
}

.mie-86 {
  margin-inline-end: 8.6rem;
}

.m-87 {
  margin: 8.7rem;
}

.mb-87 {
  margin-block: 8.7rem;
}

.mi-87 {
  margin-inline: 8.7rem;
}

.mbs-87 {
  margin-block-start: 8.7rem;
}

.mbe-87 {
  margin-block-end: 8.7rem;
}

.mis-87 {
  margin-inline-start: 8.7rem;
}

.mie-87 {
  margin-inline-end: 8.7rem;
}

.m-88 {
  margin: 8.8rem;
}

.mb-88 {
  margin-block: 8.8rem;
}

.mi-88 {
  margin-inline: 8.8rem;
}

.mbs-88 {
  margin-block-start: 8.8rem;
}

.mbe-88 {
  margin-block-end: 8.8rem;
}

.mis-88 {
  margin-inline-start: 8.8rem;
}

.mie-88 {
  margin-inline-end: 8.8rem;
}

.m-89 {
  margin: 8.9rem;
}

.mb-89 {
  margin-block: 8.9rem;
}

.mi-89 {
  margin-inline: 8.9rem;
}

.mbs-89 {
  margin-block-start: 8.9rem;
}

.mbe-89 {
  margin-block-end: 8.9rem;
}

.mis-89 {
  margin-inline-start: 8.9rem;
}

.mie-89 {
  margin-inline-end: 8.9rem;
}

.m-90 {
  margin: 9rem;
}

.mb-90 {
  margin-block: 9rem;
}

.mi-90 {
  margin-inline: 9rem;
}

.mbs-90 {
  margin-block-start: 9rem;
}

.mbe-90 {
  margin-block-end: 9rem;
}

.mis-90 {
  margin-inline-start: 9rem;
}

.mie-90 {
  margin-inline-end: 9rem;
}

.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
.text-align-right {
  text-align: right;
}
.text-align-justify {
  text-align: justify;
}

.text-decoration-line-underline {
  text-decoration-line: underline;
}
.text-decoration-line-overline {
  text-decoration-line: overline;
}
.text-decoration-line-line-through {
  text-decoration-line: line-through;
}
.text-decoration-style-solid {
  text-decoration-style: solid;
}
.text-decoration-style-double {
  text-decoration-style: double;
}
.text-decoration-style-dotted {
  text-decoration-style: dotted;
}
.text-decoration-style-dashed {
  text-decoration-style: dashed;
}
.text-decoration-style-wavy {
  text-decoration-style: wavy;
}
.text-decoration-style-thickness-1 {
  text-decoration-thickness: 0.1rem;
}
.text-decoration-style-thickness-2 {
  text-decoration-thickness: 0.2rem;
}
.text-decoration-style-thickness-3 {
  text-decoration-thickness: 0.3rem;
}
.text-decoration-style-thickness-4 {
  text-decoration-thickness: 0.4rem;
}
.text-decoration-style-thickness-5 {
  text-decoration-thickness: 0.5rem;
}
.text-decoration-style-thickness-6 {
  text-decoration-thickness: 0.6rem;
}
.text-decoration-style-thickness-7 {
  text-decoration-thickness: 0.7rem;
}
.text-decoration-style-thickness-8 {
  text-decoration-thickness: 0.8rem;
}
.text-decoration-style-thickness-9 {
  text-decoration-thickness: 0.9rem;
}
.text-decoration-style-thickness-10 {
  text-decoration-thickness: 1rem;
}
.text-decoration-style-thickness-11 {
  text-decoration-thickness: 1.1rem;
}
.text-decoration-style-thickness-12 {
  text-decoration-thickness: 1.2rem;
}
.text-decoration-style-thickness-13 {
  text-decoration-thickness: 1.3rem;
}
.text-decoration-style-thickness-14 {
  text-decoration-thickness: 1.4rem;
}
.text-decoration-style-thickness-15 {
  text-decoration-thickness: 1.5rem;
}
.text-decoration-style-thickness-16 {
  text-decoration-thickness: 1.6rem;
}
.text-decoration-style-thickness-17 {
  text-decoration-thickness: 1.7rem;
}
.text-decoration-style-thickness-18 {
  text-decoration-thickness: 1.8rem;
}
.text-decoration-style-thickness-19 {
  text-decoration-thickness: 1.9rem;
}
.text-decoration-style-thickness-20 {
  text-decoration-thickness: 2rem;
}
.text-decoration-style-thickness-21 {
  text-decoration-thickness: 2.1rem;
}
.text-decoration-style-thickness-22 {
  text-decoration-thickness: 2.2rem;
}
.text-decoration-style-thickness-23 {
  text-decoration-thickness: 2.3rem;
}
.text-decoration-style-thickness-24 {
  text-decoration-thickness: 2.4rem;
}
.text-decoration-style-thickness-25 {
  text-decoration-thickness: 2.5rem;
}
.text-decoration-style-thickness-26 {
  text-decoration-thickness: 2.6rem;
}
.text-decoration-style-thickness-27 {
  text-decoration-thickness: 2.7rem;
}
.text-decoration-style-thickness-28 {
  text-decoration-thickness: 2.8rem;
}
.text-decoration-style-thickness-29 {
  text-decoration-thickness: 2.9rem;
}
.text-decoration-style-thickness-30 {
  text-decoration-thickness: 3rem;
}
.text-decoration-style-thickness-31 {
  text-decoration-thickness: 3.1rem;
}
.text-decoration-style-thickness-32 {
  text-decoration-thickness: 3.2rem;
}
.text-decoration-style-thickness-33 {
  text-decoration-thickness: 3.3rem;
}
.text-decoration-style-thickness-34 {
  text-decoration-thickness: 3.4rem;
}
.text-decoration-style-thickness-35 {
  text-decoration-thickness: 3.5rem;
}
.text-decoration-style-thickness-36 {
  text-decoration-thickness: 3.6rem;
}
.text-decoration-style-thickness-37 {
  text-decoration-thickness: 3.7rem;
}
.text-decoration-style-thickness-38 {
  text-decoration-thickness: 3.8rem;
}
.text-decoration-style-thickness-39 {
  text-decoration-thickness: 3.9rem;
}
.text-decoration-style-thickness-40 {
  text-decoration-thickness: 4rem;
}
.text-decoration-style-thickness-41 {
  text-decoration-thickness: 4.1rem;
}
.text-decoration-style-thickness-42 {
  text-decoration-thickness: 4.2rem;
}
.text-decoration-style-thickness-43 {
  text-decoration-thickness: 4.3rem;
}
.text-decoration-style-thickness-44 {
  text-decoration-thickness: 4.4rem;
}
.text-decoration-style-thickness-45 {
  text-decoration-thickness: 4.5rem;
}
.text-decoration-style-thickness-46 {
  text-decoration-thickness: 4.6rem;
}
.text-decoration-style-thickness-47 {
  text-decoration-thickness: 4.7rem;
}
.text-decoration-style-thickness-48 {
  text-decoration-thickness: 4.8rem;
}
.text-decoration-style-thickness-49 {
  text-decoration-thickness: 4.9rem;
}
.text-decoration-style-thickness-50 {
  text-decoration-thickness: 5rem;
}
.text-decoration-style-thickness-51 {
  text-decoration-thickness: 5.1rem;
}
.text-decoration-style-thickness-52 {
  text-decoration-thickness: 5.2rem;
}
.text-decoration-style-thickness-53 {
  text-decoration-thickness: 5.3rem;
}
.text-decoration-style-thickness-54 {
  text-decoration-thickness: 5.4rem;
}
.text-decoration-style-thickness-55 {
  text-decoration-thickness: 5.5rem;
}
.text-decoration-style-thickness-56 {
  text-decoration-thickness: 5.6rem;
}
.text-decoration-style-thickness-57 {
  text-decoration-thickness: 5.7rem;
}
.text-decoration-style-thickness-58 {
  text-decoration-thickness: 5.8rem;
}
.text-decoration-style-thickness-59 {
  text-decoration-thickness: 5.9rem;
}
.text-decoration-style-thickness-60 {
  text-decoration-thickness: 6rem;
}
.text-decoration-style-thickness-61 {
  text-decoration-thickness: 6.1rem;
}
.text-decoration-style-thickness-62 {
  text-decoration-thickness: 6.2rem;
}
.text-decoration-style-thickness-63 {
  text-decoration-thickness: 6.3rem;
}
.text-decoration-style-thickness-64 {
  text-decoration-thickness: 6.4rem;
}
.text-decoration-style-thickness-65 {
  text-decoration-thickness: 6.5rem;
}
.text-decoration-style-thickness-66 {
  text-decoration-thickness: 6.6rem;
}
.text-decoration-style-thickness-67 {
  text-decoration-thickness: 6.7rem;
}
.text-decoration-style-thickness-68 {
  text-decoration-thickness: 6.8rem;
}
.text-decoration-style-thickness-69 {
  text-decoration-thickness: 6.9rem;
}
.text-decoration-style-thickness-70 {
  text-decoration-thickness: 7rem;
}
.text-decoration-style-thickness-71 {
  text-decoration-thickness: 7.1rem;
}
.text-decoration-style-thickness-72 {
  text-decoration-thickness: 7.2rem;
}
.text-decoration-style-thickness-73 {
  text-decoration-thickness: 7.3rem;
}
.text-decoration-style-thickness-74 {
  text-decoration-thickness: 7.4rem;
}
.text-decoration-style-thickness-75 {
  text-decoration-thickness: 7.5rem;
}
.text-decoration-style-thickness-76 {
  text-decoration-thickness: 7.6rem;
}
.text-decoration-style-thickness-77 {
  text-decoration-thickness: 7.7rem;
}
.text-decoration-style-thickness-78 {
  text-decoration-thickness: 7.8rem;
}
.text-decoration-style-thickness-79 {
  text-decoration-thickness: 7.9rem;
}
.text-decoration-style-thickness-80 {
  text-decoration-thickness: 8rem;
}
.text-decoration-style-thickness-81 {
  text-decoration-thickness: 8.1rem;
}
.text-decoration-style-thickness-82 {
  text-decoration-thickness: 8.2rem;
}
.text-decoration-style-thickness-83 {
  text-decoration-thickness: 8.3rem;
}
.text-decoration-style-thickness-84 {
  text-decoration-thickness: 8.4rem;
}
.text-decoration-style-thickness-85 {
  text-decoration-thickness: 8.5rem;
}
.text-decoration-style-thickness-86 {
  text-decoration-thickness: 8.6rem;
}
.text-decoration-style-thickness-87 {
  text-decoration-thickness: 8.7rem;
}
.text-decoration-style-thickness-88 {
  text-decoration-thickness: 8.8rem;
}
.text-decoration-style-thickness-89 {
  text-decoration-thickness: 8.9rem;
}
.text-decoration-style-thickness-90 {
  text-decoration-thickness: 9rem;
}

.text-transform-capitalize {
  text-transform: capitalize;
}
.text-transform-uppercase {
  text-transform: uppercase;
}
.text-transform-lowercase {
  text-transform: lowercase;
}

.font-family-DINPro {
  font-family: "DIN Pro";
}
.font-family-sans-serif {
  font-family: sans-serif;
}
.font-style-italic {
  font-style: italic;
}
.font-size-1 {
  font-size: 0.5rem;
}
.font-weight-1 {
  font-weight: 100;
}
.font-size-2 {
  font-size: 1rem;
}
.font-weight-2 {
  font-weight: 200;
}
.font-size-3 {
  font-size: 1.5rem;
}
.font-weight-3 {
  font-weight: 300;
}
.font-size-4 {
  font-size: 2rem;
}
.font-weight-4 {
  font-weight: 400;
}
.font-size-5 {
  font-size: 2.5rem;
}
.font-weight-5 {
  font-weight: 500;
}
.font-size-6 {
  font-size: 3rem;
}
.font-weight-6 {
  font-weight: 600;
}
.font-size-7 {
  font-size: 3.5rem;
}
.font-weight-7 {
  font-weight: 700;
}
.font-size-8 {
  font-size: 4rem;
}
.font-weight-8 {
  font-weight: 800;
}
.font-size-9 {
  font-size: 4.5rem;
}
.font-weight-9 {
  font-weight: 900;
}
.font-size-10 {
  font-size: 5rem;
}
.font-size-11 {
  font-size: 5.5rem;
}
.font-size-12 {
  font-size: 6rem;
}
.font-size-13 {
  font-size: 6.5rem;
}
.font-size-14 {
  font-size: 7rem;
}
.font-size-15 {
  font-size: 7.5rem;
}
.font-size-16 {
  font-size: 8rem;
}
.font-size-17 {
  font-size: 8.5rem;
}
.font-size-18 {
  font-size: 9rem;
}
.font-size-19 {
  font-size: 9.5rem;
}
.font-size-20 {
  font-size: 10rem;
}

.border-style-solid {
  border-style: solid;
}
.border-style-hidden {
  border-style: hidden;
}
.border-style-dotted {
  border-style: dotted;
}
.border-style-dashed {
  border-style: dashed;
}
.border-style-double {
  border-style: double;
}
.border-style-groove {
  border-style: groove;
}
.border-style-ridge {
  border-style: ridge;
}
.border-style-inset {
  border-style: inset;
}
.border-style-outset {
  border-style: outset;
}
.border-top-style-solid {
  border-top-style: solid;
}
.border-top-style-hidden {
  border-top-style: hidden;
}
.border-top-style-dotted {
  border-top-style: dotted;
}
.border-top-style-dashed {
  border-top-style: dashed;
}
.border-top-style-double {
  border-top-style: double;
}
.border-top-style-groove {
  border-top-style: groove;
}
.border-top-style-ridge {
  border-top-style: ridge;
}
.border-top-style-inset {
  border-top-style: inset;
}
.border-top-style-outset {
  border-top-style: outset;
}
.border-bottom-style-solid {
  border-bottom-style: solid;
}
.border-bottom-style-hidden {
  border-bottom-style: hidden;
}
.border-bottom-style-dotted {
  border-bottom-style: dotted;
}
.border-bottom-style-dashed {
  border-bottom-style: dashed;
}
.border-bottom-style-double {
  border-bottom-style: double;
}
.border-bottom-style-groove {
  border-bottom-style: groove;
}
.border-bottom-style-ridge {
  border-bottom-style: ridge;
}
.border-bottom-style-inset {
  border-bottom-style: inset;
}
.border-bottom-style-outset {
  border-bottom-style: outset;
}
.border-left-style-solid {
  border-left-style: solid;
}
.border-left-style-hidden {
  border-left-style: hidden;
}
.border-left-style-dotted {
  border-left-style: dotted;
}
.border-left-style-dashed {
  border-left-style: dashed;
}
.border-left-style-double {
  border-left-style: double;
}
.border-left-style-groove {
  border-left-style: groove;
}
.border-left-style-ridge {
  border-left-style: ridge;
}
.border-left-style-inset {
  border-left-style: inset;
}
.border-left-style-outset {
  border-left-style: outset;
}
.border-right-style-solid {
  border-right-style: solid;
}
.border-right-style-hidden {
  border-right-style: hidden;
}
.border-right-style-dotted {
  border-right-style: dotted;
}
.border-right-style-dashed {
  border-right-style: dashed;
}
.border-right-style-double {
  border-right-style: double;
}
.border-right-style-groove {
  border-right-style: groove;
}
.border-right-style-ridge {
  border-right-style: ridge;
}
.border-right-style-inset {
  border-right-style: inset;
}
.border-right-style-outset {
  border-right-style: outset;
}
.border-width-1 {
  border-width: 0.1rem;
}
.border-top-width-1 {
  border-top-width: 0.1rem;
}
.border-bottom-width-1 {
  border-bottom-width: 0.1rem;
}
.border-left-width-1 {
  border-left-width: 0.1rem;
}
.border-right-width-1 {
  border-right-width: 0.1rem;
}
.border-radius-1 {
  border-radius: 0.1rem;
}
.border-width-2 {
  border-width: 0.2rem;
}
.border-top-width-2 {
  border-top-width: 0.2rem;
}
.border-bottom-width-2 {
  border-bottom-width: 0.2rem;
}
.border-left-width-2 {
  border-left-width: 0.2rem;
}
.border-right-width-2 {
  border-right-width: 0.2rem;
}
.border-radius-2 {
  border-radius: 0.2rem;
}
.border-width-3 {
  border-width: 0.3rem;
}
.border-top-width-3 {
  border-top-width: 0.3rem;
}
.border-bottom-width-3 {
  border-bottom-width: 0.3rem;
}
.border-left-width-3 {
  border-left-width: 0.3rem;
}
.border-right-width-3 {
  border-right-width: 0.3rem;
}
.border-radius-3 {
  border-radius: 0.3rem;
}
.border-width-4 {
  border-width: 0.4rem;
}
.border-top-width-4 {
  border-top-width: 0.4rem;
}
.border-bottom-width-4 {
  border-bottom-width: 0.4rem;
}
.border-left-width-4 {
  border-left-width: 0.4rem;
}
.border-right-width-4 {
  border-right-width: 0.4rem;
}
.border-radius-4 {
  border-radius: 0.4rem;
}
.border-width-5 {
  border-width: 0.5rem;
}
.border-top-width-5 {
  border-top-width: 0.5rem;
}
.border-bottom-width-5 {
  border-bottom-width: 0.5rem;
}
.border-left-width-5 {
  border-left-width: 0.5rem;
}
.border-right-width-5 {
  border-right-width: 0.5rem;
}
.border-radius-5 {
  border-radius: 0.5rem;
}
.border-width-6 {
  border-width: 0.6rem;
}
.border-top-width-6 {
  border-top-width: 0.6rem;
}
.border-bottom-width-6 {
  border-bottom-width: 0.6rem;
}
.border-left-width-6 {
  border-left-width: 0.6rem;
}
.border-right-width-6 {
  border-right-width: 0.6rem;
}
.border-radius-6 {
  border-radius: 0.6rem;
}
.border-width-7 {
  border-width: 0.7rem;
}
.border-top-width-7 {
  border-top-width: 0.7rem;
}
.border-bottom-width-7 {
  border-bottom-width: 0.7rem;
}
.border-left-width-7 {
  border-left-width: 0.7rem;
}
.border-right-width-7 {
  border-right-width: 0.7rem;
}
.border-radius-7 {
  border-radius: 0.7rem;
}
.border-width-8 {
  border-width: 0.8rem;
}
.border-top-width-8 {
  border-top-width: 0.8rem;
}
.border-bottom-width-8 {
  border-bottom-width: 0.8rem;
}
.border-left-width-8 {
  border-left-width: 0.8rem;
}
.border-right-width-8 {
  border-right-width: 0.8rem;
}
.border-radius-8 {
  border-radius: 0.8rem;
}
.border-width-9 {
  border-width: 0.9rem;
}
.border-top-width-9 {
  border-top-width: 0.9rem;
}
.border-bottom-width-9 {
  border-bottom-width: 0.9rem;
}
.border-left-width-9 {
  border-left-width: 0.9rem;
}
.border-right-width-9 {
  border-right-width: 0.9rem;
}
.border-radius-9 {
  border-radius: 0.9rem;
}
.border-width-10 {
  border-width: 1rem;
}
.border-top-width-10 {
  border-top-width: 1rem;
}
.border-bottom-width-10 {
  border-bottom-width: 1rem;
}
.border-left-width-10 {
  border-left-width: 1rem;
}
.border-right-width-10 {
  border-right-width: 1rem;
}
.border-radius-10 {
  border-radius: 1rem;
}
.border-width-11 {
  border-width: 1.1rem;
}
.border-top-width-11 {
  border-top-width: 1.1rem;
}
.border-bottom-width-11 {
  border-bottom-width: 1.1rem;
}
.border-left-width-11 {
  border-left-width: 1.1rem;
}
.border-right-width-11 {
  border-right-width: 1.1rem;
}
.border-radius-11 {
  border-radius: 1.1rem;
}
.border-width-12 {
  border-width: 1.2rem;
}
.border-top-width-12 {
  border-top-width: 1.2rem;
}
.border-bottom-width-12 {
  border-bottom-width: 1.2rem;
}
.border-left-width-12 {
  border-left-width: 1.2rem;
}
.border-right-width-12 {
  border-right-width: 1.2rem;
}
.border-radius-12 {
  border-radius: 1.2rem;
}
.border-width-13 {
  border-width: 1.3rem;
}
.border-top-width-13 {
  border-top-width: 1.3rem;
}
.border-bottom-width-13 {
  border-bottom-width: 1.3rem;
}
.border-left-width-13 {
  border-left-width: 1.3rem;
}
.border-right-width-13 {
  border-right-width: 1.3rem;
}
.border-radius-13 {
  border-radius: 1.3rem;
}
.border-width-14 {
  border-width: 1.4rem;
}
.border-top-width-14 {
  border-top-width: 1.4rem;
}
.border-bottom-width-14 {
  border-bottom-width: 1.4rem;
}
.border-left-width-14 {
  border-left-width: 1.4rem;
}
.border-right-width-14 {
  border-right-width: 1.4rem;
}
.border-radius-14 {
  border-radius: 1.4rem;
}
.border-width-15 {
  border-width: 1.5rem;
}
.border-top-width-15 {
  border-top-width: 1.5rem;
}
.border-bottom-width-15 {
  border-bottom-width: 1.5rem;
}
.border-left-width-15 {
  border-left-width: 1.5rem;
}
.border-right-width-15 {
  border-right-width: 1.5rem;
}
.border-radius-15 {
  border-radius: 1.5rem;
}
.border-width-16 {
  border-width: 1.6rem;
}
.border-top-width-16 {
  border-top-width: 1.6rem;
}
.border-bottom-width-16 {
  border-bottom-width: 1.6rem;
}
.border-left-width-16 {
  border-left-width: 1.6rem;
}
.border-right-width-16 {
  border-right-width: 1.6rem;
}
.border-radius-16 {
  border-radius: 1.6rem;
}
.border-width-17 {
  border-width: 1.7rem;
}
.border-top-width-17 {
  border-top-width: 1.7rem;
}
.border-bottom-width-17 {
  border-bottom-width: 1.7rem;
}
.border-left-width-17 {
  border-left-width: 1.7rem;
}
.border-right-width-17 {
  border-right-width: 1.7rem;
}
.border-radius-17 {
  border-radius: 1.7rem;
}
.border-width-18 {
  border-width: 1.8rem;
}
.border-top-width-18 {
  border-top-width: 1.8rem;
}
.border-bottom-width-18 {
  border-bottom-width: 1.8rem;
}
.border-left-width-18 {
  border-left-width: 1.8rem;
}
.border-right-width-18 {
  border-right-width: 1.8rem;
}
.border-radius-18 {
  border-radius: 1.8rem;
}
.border-width-19 {
  border-width: 1.9rem;
}
.border-top-width-19 {
  border-top-width: 1.9rem;
}
.border-bottom-width-19 {
  border-bottom-width: 1.9rem;
}
.border-left-width-19 {
  border-left-width: 1.9rem;
}
.border-right-width-19 {
  border-right-width: 1.9rem;
}
.border-radius-19 {
  border-radius: 1.9rem;
}
.border-width-20 {
  border-width: 2rem;
}
.border-top-width-20 {
  border-top-width: 2rem;
}
.border-bottom-width-20 {
  border-bottom-width: 2rem;
}
.border-left-width-20 {
  border-left-width: 2rem;
}
.border-right-width-20 {
  border-right-width: 2rem;
}
.border-radius-20 {
  border-radius: 2rem;
}
.border-width-21 {
  border-width: 2.1rem;
}
.border-top-width-21 {
  border-top-width: 2.1rem;
}
.border-bottom-width-21 {
  border-bottom-width: 2.1rem;
}
.border-left-width-21 {
  border-left-width: 2.1rem;
}
.border-right-width-21 {
  border-right-width: 2.1rem;
}
.border-radius-21 {
  border-radius: 2.1rem;
}
.border-width-22 {
  border-width: 2.2rem;
}
.border-top-width-22 {
  border-top-width: 2.2rem;
}
.border-bottom-width-22 {
  border-bottom-width: 2.2rem;
}
.border-left-width-22 {
  border-left-width: 2.2rem;
}
.border-right-width-22 {
  border-right-width: 2.2rem;
}
.border-radius-22 {
  border-radius: 2.2rem;
}
.border-width-23 {
  border-width: 2.3rem;
}
.border-top-width-23 {
  border-top-width: 2.3rem;
}
.border-bottom-width-23 {
  border-bottom-width: 2.3rem;
}
.border-left-width-23 {
  border-left-width: 2.3rem;
}
.border-right-width-23 {
  border-right-width: 2.3rem;
}
.border-radius-23 {
  border-radius: 2.3rem;
}
.border-width-24 {
  border-width: 2.4rem;
}
.border-top-width-24 {
  border-top-width: 2.4rem;
}
.border-bottom-width-24 {
  border-bottom-width: 2.4rem;
}
.border-left-width-24 {
  border-left-width: 2.4rem;
}
.border-right-width-24 {
  border-right-width: 2.4rem;
}
.border-radius-24 {
  border-radius: 2.4rem;
}
.border-width-25 {
  border-width: 2.5rem;
}
.border-top-width-25 {
  border-top-width: 2.5rem;
}
.border-bottom-width-25 {
  border-bottom-width: 2.5rem;
}
.border-left-width-25 {
  border-left-width: 2.5rem;
}
.border-right-width-25 {
  border-right-width: 2.5rem;
}
.border-radius-25 {
  border-radius: 2.5rem;
}
.border-width-26 {
  border-width: 2.6rem;
}
.border-top-width-26 {
  border-top-width: 2.6rem;
}
.border-bottom-width-26 {
  border-bottom-width: 2.6rem;
}
.border-left-width-26 {
  border-left-width: 2.6rem;
}
.border-right-width-26 {
  border-right-width: 2.6rem;
}
.border-radius-26 {
  border-radius: 2.6rem;
}
.border-width-27 {
  border-width: 2.7rem;
}
.border-top-width-27 {
  border-top-width: 2.7rem;
}
.border-bottom-width-27 {
  border-bottom-width: 2.7rem;
}
.border-left-width-27 {
  border-left-width: 2.7rem;
}
.border-right-width-27 {
  border-right-width: 2.7rem;
}
.border-radius-27 {
  border-radius: 2.7rem;
}
.border-width-28 {
  border-width: 2.8rem;
}
.border-top-width-28 {
  border-top-width: 2.8rem;
}
.border-bottom-width-28 {
  border-bottom-width: 2.8rem;
}
.border-left-width-28 {
  border-left-width: 2.8rem;
}
.border-right-width-28 {
  border-right-width: 2.8rem;
}
.border-radius-28 {
  border-radius: 2.8rem;
}
.border-width-29 {
  border-width: 2.9rem;
}
.border-top-width-29 {
  border-top-width: 2.9rem;
}
.border-bottom-width-29 {
  border-bottom-width: 2.9rem;
}
.border-left-width-29 {
  border-left-width: 2.9rem;
}
.border-right-width-29 {
  border-right-width: 2.9rem;
}
.border-radius-29 {
  border-radius: 2.9rem;
}
.border-width-30 {
  border-width: 3rem;
}
.border-top-width-30 {
  border-top-width: 3rem;
}
.border-bottom-width-30 {
  border-bottom-width: 3rem;
}
.border-left-width-30 {
  border-left-width: 3rem;
}
.border-right-width-30 {
  border-right-width: 3rem;
}
.border-radius-30 {
  border-radius: 3rem;
}
.border-width-31 {
  border-width: 3.1rem;
}
.border-top-width-31 {
  border-top-width: 3.1rem;
}
.border-bottom-width-31 {
  border-bottom-width: 3.1rem;
}
.border-left-width-31 {
  border-left-width: 3.1rem;
}
.border-right-width-31 {
  border-right-width: 3.1rem;
}
.border-radius-31 {
  border-radius: 3.1rem;
}
.border-width-32 {
  border-width: 3.2rem;
}
.border-top-width-32 {
  border-top-width: 3.2rem;
}
.border-bottom-width-32 {
  border-bottom-width: 3.2rem;
}
.border-left-width-32 {
  border-left-width: 3.2rem;
}
.border-right-width-32 {
  border-right-width: 3.2rem;
}
.border-radius-32 {
  border-radius: 3.2rem;
}
.border-width-33 {
  border-width: 3.3rem;
}
.border-top-width-33 {
  border-top-width: 3.3rem;
}
.border-bottom-width-33 {
  border-bottom-width: 3.3rem;
}
.border-left-width-33 {
  border-left-width: 3.3rem;
}
.border-right-width-33 {
  border-right-width: 3.3rem;
}
.border-radius-33 {
  border-radius: 3.3rem;
}
.border-width-34 {
  border-width: 3.4rem;
}
.border-top-width-34 {
  border-top-width: 3.4rem;
}
.border-bottom-width-34 {
  border-bottom-width: 3.4rem;
}
.border-left-width-34 {
  border-left-width: 3.4rem;
}
.border-right-width-34 {
  border-right-width: 3.4rem;
}
.border-radius-34 {
  border-radius: 3.4rem;
}
.border-width-35 {
  border-width: 3.5rem;
}
.border-top-width-35 {
  border-top-width: 3.5rem;
}
.border-bottom-width-35 {
  border-bottom-width: 3.5rem;
}
.border-left-width-35 {
  border-left-width: 3.5rem;
}
.border-right-width-35 {
  border-right-width: 3.5rem;
}
.border-radius-35 {
  border-radius: 3.5rem;
}
.border-width-36 {
  border-width: 3.6rem;
}
.border-top-width-36 {
  border-top-width: 3.6rem;
}
.border-bottom-width-36 {
  border-bottom-width: 3.6rem;
}
.border-left-width-36 {
  border-left-width: 3.6rem;
}
.border-right-width-36 {
  border-right-width: 3.6rem;
}
.border-radius-36 {
  border-radius: 3.6rem;
}
.border-width-37 {
  border-width: 3.7rem;
}
.border-top-width-37 {
  border-top-width: 3.7rem;
}
.border-bottom-width-37 {
  border-bottom-width: 3.7rem;
}
.border-left-width-37 {
  border-left-width: 3.7rem;
}
.border-right-width-37 {
  border-right-width: 3.7rem;
}
.border-radius-37 {
  border-radius: 3.7rem;
}
.border-width-38 {
  border-width: 3.8rem;
}
.border-top-width-38 {
  border-top-width: 3.8rem;
}
.border-bottom-width-38 {
  border-bottom-width: 3.8rem;
}
.border-left-width-38 {
  border-left-width: 3.8rem;
}
.border-right-width-38 {
  border-right-width: 3.8rem;
}
.border-radius-38 {
  border-radius: 3.8rem;
}
.border-width-39 {
  border-width: 3.9rem;
}
.border-top-width-39 {
  border-top-width: 3.9rem;
}
.border-bottom-width-39 {
  border-bottom-width: 3.9rem;
}
.border-left-width-39 {
  border-left-width: 3.9rem;
}
.border-right-width-39 {
  border-right-width: 3.9rem;
}
.border-radius-39 {
  border-radius: 3.9rem;
}
.border-width-40 {
  border-width: 4rem;
}
.border-top-width-40 {
  border-top-width: 4rem;
}
.border-bottom-width-40 {
  border-bottom-width: 4rem;
}
.border-left-width-40 {
  border-left-width: 4rem;
}
.border-right-width-40 {
  border-right-width: 4rem;
}
.border-radius-40 {
  border-radius: 4rem;
}
.border-width-41 {
  border-width: 4.1rem;
}
.border-top-width-41 {
  border-top-width: 4.1rem;
}
.border-bottom-width-41 {
  border-bottom-width: 4.1rem;
}
.border-left-width-41 {
  border-left-width: 4.1rem;
}
.border-right-width-41 {
  border-right-width: 4.1rem;
}
.border-radius-41 {
  border-radius: 4.1rem;
}
.border-width-42 {
  border-width: 4.2rem;
}
.border-top-width-42 {
  border-top-width: 4.2rem;
}
.border-bottom-width-42 {
  border-bottom-width: 4.2rem;
}
.border-left-width-42 {
  border-left-width: 4.2rem;
}
.border-right-width-42 {
  border-right-width: 4.2rem;
}
.border-radius-42 {
  border-radius: 4.2rem;
}
.border-width-43 {
  border-width: 4.3rem;
}
.border-top-width-43 {
  border-top-width: 4.3rem;
}
.border-bottom-width-43 {
  border-bottom-width: 4.3rem;
}
.border-left-width-43 {
  border-left-width: 4.3rem;
}
.border-right-width-43 {
  border-right-width: 4.3rem;
}
.border-radius-43 {
  border-radius: 4.3rem;
}
.border-width-44 {
  border-width: 4.4rem;
}
.border-top-width-44 {
  border-top-width: 4.4rem;
}
.border-bottom-width-44 {
  border-bottom-width: 4.4rem;
}
.border-left-width-44 {
  border-left-width: 4.4rem;
}
.border-right-width-44 {
  border-right-width: 4.4rem;
}
.border-radius-44 {
  border-radius: 4.4rem;
}
.border-width-45 {
  border-width: 4.5rem;
}
.border-top-width-45 {
  border-top-width: 4.5rem;
}
.border-bottom-width-45 {
  border-bottom-width: 4.5rem;
}
.border-left-width-45 {
  border-left-width: 4.5rem;
}
.border-right-width-45 {
  border-right-width: 4.5rem;
}
.border-radius-45 {
  border-radius: 4.5rem;
}
.border-width-46 {
  border-width: 4.6rem;
}
.border-top-width-46 {
  border-top-width: 4.6rem;
}
.border-bottom-width-46 {
  border-bottom-width: 4.6rem;
}
.border-left-width-46 {
  border-left-width: 4.6rem;
}
.border-right-width-46 {
  border-right-width: 4.6rem;
}
.border-radius-46 {
  border-radius: 4.6rem;
}
.border-width-47 {
  border-width: 4.7rem;
}
.border-top-width-47 {
  border-top-width: 4.7rem;
}
.border-bottom-width-47 {
  border-bottom-width: 4.7rem;
}
.border-left-width-47 {
  border-left-width: 4.7rem;
}
.border-right-width-47 {
  border-right-width: 4.7rem;
}
.border-radius-47 {
  border-radius: 4.7rem;
}
.border-width-48 {
  border-width: 4.8rem;
}
.border-top-width-48 {
  border-top-width: 4.8rem;
}
.border-bottom-width-48 {
  border-bottom-width: 4.8rem;
}
.border-left-width-48 {
  border-left-width: 4.8rem;
}
.border-right-width-48 {
  border-right-width: 4.8rem;
}
.border-radius-48 {
  border-radius: 4.8rem;
}
.border-width-49 {
  border-width: 4.9rem;
}
.border-top-width-49 {
  border-top-width: 4.9rem;
}
.border-bottom-width-49 {
  border-bottom-width: 4.9rem;
}
.border-left-width-49 {
  border-left-width: 4.9rem;
}
.border-right-width-49 {
  border-right-width: 4.9rem;
}
.border-radius-49 {
  border-radius: 4.9rem;
}
.border-width-50 {
  border-width: 5rem;
}
.border-top-width-50 {
  border-top-width: 5rem;
}
.border-bottom-width-50 {
  border-bottom-width: 5rem;
}
.border-left-width-50 {
  border-left-width: 5rem;
}
.border-right-width-50 {
  border-right-width: 5rem;
}
.border-radius-50 {
  border-radius: 5rem;
}
.border-width-51 {
  border-width: 5.1rem;
}
.border-top-width-51 {
  border-top-width: 5.1rem;
}
.border-bottom-width-51 {
  border-bottom-width: 5.1rem;
}
.border-left-width-51 {
  border-left-width: 5.1rem;
}
.border-right-width-51 {
  border-right-width: 5.1rem;
}
.border-radius-51 {
  border-radius: 5.1rem;
}
.border-width-52 {
  border-width: 5.2rem;
}
.border-top-width-52 {
  border-top-width: 5.2rem;
}
.border-bottom-width-52 {
  border-bottom-width: 5.2rem;
}
.border-left-width-52 {
  border-left-width: 5.2rem;
}
.border-right-width-52 {
  border-right-width: 5.2rem;
}
.border-radius-52 {
  border-radius: 5.2rem;
}
.border-width-53 {
  border-width: 5.3rem;
}
.border-top-width-53 {
  border-top-width: 5.3rem;
}
.border-bottom-width-53 {
  border-bottom-width: 5.3rem;
}
.border-left-width-53 {
  border-left-width: 5.3rem;
}
.border-right-width-53 {
  border-right-width: 5.3rem;
}
.border-radius-53 {
  border-radius: 5.3rem;
}
.border-width-54 {
  border-width: 5.4rem;
}
.border-top-width-54 {
  border-top-width: 5.4rem;
}
.border-bottom-width-54 {
  border-bottom-width: 5.4rem;
}
.border-left-width-54 {
  border-left-width: 5.4rem;
}
.border-right-width-54 {
  border-right-width: 5.4rem;
}
.border-radius-54 {
  border-radius: 5.4rem;
}
.border-width-55 {
  border-width: 5.5rem;
}
.border-top-width-55 {
  border-top-width: 5.5rem;
}
.border-bottom-width-55 {
  border-bottom-width: 5.5rem;
}
.border-left-width-55 {
  border-left-width: 5.5rem;
}
.border-right-width-55 {
  border-right-width: 5.5rem;
}
.border-radius-55 {
  border-radius: 5.5rem;
}
.border-width-56 {
  border-width: 5.6rem;
}
.border-top-width-56 {
  border-top-width: 5.6rem;
}
.border-bottom-width-56 {
  border-bottom-width: 5.6rem;
}
.border-left-width-56 {
  border-left-width: 5.6rem;
}
.border-right-width-56 {
  border-right-width: 5.6rem;
}
.border-radius-56 {
  border-radius: 5.6rem;
}
.border-width-57 {
  border-width: 5.7rem;
}
.border-top-width-57 {
  border-top-width: 5.7rem;
}
.border-bottom-width-57 {
  border-bottom-width: 5.7rem;
}
.border-left-width-57 {
  border-left-width: 5.7rem;
}
.border-right-width-57 {
  border-right-width: 5.7rem;
}
.border-radius-57 {
  border-radius: 5.7rem;
}
.border-width-58 {
  border-width: 5.8rem;
}
.border-top-width-58 {
  border-top-width: 5.8rem;
}
.border-bottom-width-58 {
  border-bottom-width: 5.8rem;
}
.border-left-width-58 {
  border-left-width: 5.8rem;
}
.border-right-width-58 {
  border-right-width: 5.8rem;
}
.border-radius-58 {
  border-radius: 5.8rem;
}
.border-width-59 {
  border-width: 5.9rem;
}
.border-top-width-59 {
  border-top-width: 5.9rem;
}
.border-bottom-width-59 {
  border-bottom-width: 5.9rem;
}
.border-left-width-59 {
  border-left-width: 5.9rem;
}
.border-right-width-59 {
  border-right-width: 5.9rem;
}
.border-radius-59 {
  border-radius: 5.9rem;
}
.border-width-60 {
  border-width: 6rem;
}
.border-top-width-60 {
  border-top-width: 6rem;
}
.border-bottom-width-60 {
  border-bottom-width: 6rem;
}
.border-left-width-60 {
  border-left-width: 6rem;
}
.border-right-width-60 {
  border-right-width: 6rem;
}
.border-radius-60 {
  border-radius: 6rem;
}
.border-width-61 {
  border-width: 6.1rem;
}
.border-top-width-61 {
  border-top-width: 6.1rem;
}
.border-bottom-width-61 {
  border-bottom-width: 6.1rem;
}
.border-left-width-61 {
  border-left-width: 6.1rem;
}
.border-right-width-61 {
  border-right-width: 6.1rem;
}
.border-radius-61 {
  border-radius: 6.1rem;
}
.border-width-62 {
  border-width: 6.2rem;
}
.border-top-width-62 {
  border-top-width: 6.2rem;
}
.border-bottom-width-62 {
  border-bottom-width: 6.2rem;
}
.border-left-width-62 {
  border-left-width: 6.2rem;
}
.border-right-width-62 {
  border-right-width: 6.2rem;
}
.border-radius-62 {
  border-radius: 6.2rem;
}
.border-width-63 {
  border-width: 6.3rem;
}
.border-top-width-63 {
  border-top-width: 6.3rem;
}
.border-bottom-width-63 {
  border-bottom-width: 6.3rem;
}
.border-left-width-63 {
  border-left-width: 6.3rem;
}
.border-right-width-63 {
  border-right-width: 6.3rem;
}
.border-radius-63 {
  border-radius: 6.3rem;
}
.border-width-64 {
  border-width: 6.4rem;
}
.border-top-width-64 {
  border-top-width: 6.4rem;
}
.border-bottom-width-64 {
  border-bottom-width: 6.4rem;
}
.border-left-width-64 {
  border-left-width: 6.4rem;
}
.border-right-width-64 {
  border-right-width: 6.4rem;
}
.border-radius-64 {
  border-radius: 6.4rem;
}
.border-width-65 {
  border-width: 6.5rem;
}
.border-top-width-65 {
  border-top-width: 6.5rem;
}
.border-bottom-width-65 {
  border-bottom-width: 6.5rem;
}
.border-left-width-65 {
  border-left-width: 6.5rem;
}
.border-right-width-65 {
  border-right-width: 6.5rem;
}
.border-radius-65 {
  border-radius: 6.5rem;
}
.border-width-66 {
  border-width: 6.6rem;
}
.border-top-width-66 {
  border-top-width: 6.6rem;
}
.border-bottom-width-66 {
  border-bottom-width: 6.6rem;
}
.border-left-width-66 {
  border-left-width: 6.6rem;
}
.border-right-width-66 {
  border-right-width: 6.6rem;
}
.border-radius-66 {
  border-radius: 6.6rem;
}
.border-width-67 {
  border-width: 6.7rem;
}
.border-top-width-67 {
  border-top-width: 6.7rem;
}
.border-bottom-width-67 {
  border-bottom-width: 6.7rem;
}
.border-left-width-67 {
  border-left-width: 6.7rem;
}
.border-right-width-67 {
  border-right-width: 6.7rem;
}
.border-radius-67 {
  border-radius: 6.7rem;
}
.border-width-68 {
  border-width: 6.8rem;
}
.border-top-width-68 {
  border-top-width: 6.8rem;
}
.border-bottom-width-68 {
  border-bottom-width: 6.8rem;
}
.border-left-width-68 {
  border-left-width: 6.8rem;
}
.border-right-width-68 {
  border-right-width: 6.8rem;
}
.border-radius-68 {
  border-radius: 6.8rem;
}
.border-width-69 {
  border-width: 6.9rem;
}
.border-top-width-69 {
  border-top-width: 6.9rem;
}
.border-bottom-width-69 {
  border-bottom-width: 6.9rem;
}
.border-left-width-69 {
  border-left-width: 6.9rem;
}
.border-right-width-69 {
  border-right-width: 6.9rem;
}
.border-radius-69 {
  border-radius: 6.9rem;
}
.border-width-70 {
  border-width: 7rem;
}
.border-top-width-70 {
  border-top-width: 7rem;
}
.border-bottom-width-70 {
  border-bottom-width: 7rem;
}
.border-left-width-70 {
  border-left-width: 7rem;
}
.border-right-width-70 {
  border-right-width: 7rem;
}
.border-radius-70 {
  border-radius: 7rem;
}
.border-width-71 {
  border-width: 7.1rem;
}
.border-top-width-71 {
  border-top-width: 7.1rem;
}
.border-bottom-width-71 {
  border-bottom-width: 7.1rem;
}
.border-left-width-71 {
  border-left-width: 7.1rem;
}
.border-right-width-71 {
  border-right-width: 7.1rem;
}
.border-radius-71 {
  border-radius: 7.1rem;
}
.border-width-72 {
  border-width: 7.2rem;
}
.border-top-width-72 {
  border-top-width: 7.2rem;
}
.border-bottom-width-72 {
  border-bottom-width: 7.2rem;
}
.border-left-width-72 {
  border-left-width: 7.2rem;
}
.border-right-width-72 {
  border-right-width: 7.2rem;
}
.border-radius-72 {
  border-radius: 7.2rem;
}
.border-width-73 {
  border-width: 7.3rem;
}
.border-top-width-73 {
  border-top-width: 7.3rem;
}
.border-bottom-width-73 {
  border-bottom-width: 7.3rem;
}
.border-left-width-73 {
  border-left-width: 7.3rem;
}
.border-right-width-73 {
  border-right-width: 7.3rem;
}
.border-radius-73 {
  border-radius: 7.3rem;
}
.border-width-74 {
  border-width: 7.4rem;
}
.border-top-width-74 {
  border-top-width: 7.4rem;
}
.border-bottom-width-74 {
  border-bottom-width: 7.4rem;
}
.border-left-width-74 {
  border-left-width: 7.4rem;
}
.border-right-width-74 {
  border-right-width: 7.4rem;
}
.border-radius-74 {
  border-radius: 7.4rem;
}
.border-width-75 {
  border-width: 7.5rem;
}
.border-top-width-75 {
  border-top-width: 7.5rem;
}
.border-bottom-width-75 {
  border-bottom-width: 7.5rem;
}
.border-left-width-75 {
  border-left-width: 7.5rem;
}
.border-right-width-75 {
  border-right-width: 7.5rem;
}
.border-radius-75 {
  border-radius: 7.5rem;
}
.border-width-76 {
  border-width: 7.6rem;
}
.border-top-width-76 {
  border-top-width: 7.6rem;
}
.border-bottom-width-76 {
  border-bottom-width: 7.6rem;
}
.border-left-width-76 {
  border-left-width: 7.6rem;
}
.border-right-width-76 {
  border-right-width: 7.6rem;
}
.border-radius-76 {
  border-radius: 7.6rem;
}
.border-width-77 {
  border-width: 7.7rem;
}
.border-top-width-77 {
  border-top-width: 7.7rem;
}
.border-bottom-width-77 {
  border-bottom-width: 7.7rem;
}
.border-left-width-77 {
  border-left-width: 7.7rem;
}
.border-right-width-77 {
  border-right-width: 7.7rem;
}
.border-radius-77 {
  border-radius: 7.7rem;
}
.border-width-78 {
  border-width: 7.8rem;
}
.border-top-width-78 {
  border-top-width: 7.8rem;
}
.border-bottom-width-78 {
  border-bottom-width: 7.8rem;
}
.border-left-width-78 {
  border-left-width: 7.8rem;
}
.border-right-width-78 {
  border-right-width: 7.8rem;
}
.border-radius-78 {
  border-radius: 7.8rem;
}
.border-width-79 {
  border-width: 7.9rem;
}
.border-top-width-79 {
  border-top-width: 7.9rem;
}
.border-bottom-width-79 {
  border-bottom-width: 7.9rem;
}
.border-left-width-79 {
  border-left-width: 7.9rem;
}
.border-right-width-79 {
  border-right-width: 7.9rem;
}
.border-radius-79 {
  border-radius: 7.9rem;
}
.border-width-80 {
  border-width: 8rem;
}
.border-top-width-80 {
  border-top-width: 8rem;
}
.border-bottom-width-80 {
  border-bottom-width: 8rem;
}
.border-left-width-80 {
  border-left-width: 8rem;
}
.border-right-width-80 {
  border-right-width: 8rem;
}
.border-radius-80 {
  border-radius: 8rem;
}
.border-width-81 {
  border-width: 8.1rem;
}
.border-top-width-81 {
  border-top-width: 8.1rem;
}
.border-bottom-width-81 {
  border-bottom-width: 8.1rem;
}
.border-left-width-81 {
  border-left-width: 8.1rem;
}
.border-right-width-81 {
  border-right-width: 8.1rem;
}
.border-radius-81 {
  border-radius: 8.1rem;
}
.border-width-82 {
  border-width: 8.2rem;
}
.border-top-width-82 {
  border-top-width: 8.2rem;
}
.border-bottom-width-82 {
  border-bottom-width: 8.2rem;
}
.border-left-width-82 {
  border-left-width: 8.2rem;
}
.border-right-width-82 {
  border-right-width: 8.2rem;
}
.border-radius-82 {
  border-radius: 8.2rem;
}
.border-width-83 {
  border-width: 8.3rem;
}
.border-top-width-83 {
  border-top-width: 8.3rem;
}
.border-bottom-width-83 {
  border-bottom-width: 8.3rem;
}
.border-left-width-83 {
  border-left-width: 8.3rem;
}
.border-right-width-83 {
  border-right-width: 8.3rem;
}
.border-radius-83 {
  border-radius: 8.3rem;
}
.border-width-84 {
  border-width: 8.4rem;
}
.border-top-width-84 {
  border-top-width: 8.4rem;
}
.border-bottom-width-84 {
  border-bottom-width: 8.4rem;
}
.border-left-width-84 {
  border-left-width: 8.4rem;
}
.border-right-width-84 {
  border-right-width: 8.4rem;
}
.border-radius-84 {
  border-radius: 8.4rem;
}
.border-width-85 {
  border-width: 8.5rem;
}
.border-top-width-85 {
  border-top-width: 8.5rem;
}
.border-bottom-width-85 {
  border-bottom-width: 8.5rem;
}
.border-left-width-85 {
  border-left-width: 8.5rem;
}
.border-right-width-85 {
  border-right-width: 8.5rem;
}
.border-radius-85 {
  border-radius: 8.5rem;
}
.border-width-86 {
  border-width: 8.6rem;
}
.border-top-width-86 {
  border-top-width: 8.6rem;
}
.border-bottom-width-86 {
  border-bottom-width: 8.6rem;
}
.border-left-width-86 {
  border-left-width: 8.6rem;
}
.border-right-width-86 {
  border-right-width: 8.6rem;
}
.border-radius-86 {
  border-radius: 8.6rem;
}
.border-width-87 {
  border-width: 8.7rem;
}
.border-top-width-87 {
  border-top-width: 8.7rem;
}
.border-bottom-width-87 {
  border-bottom-width: 8.7rem;
}
.border-left-width-87 {
  border-left-width: 8.7rem;
}
.border-right-width-87 {
  border-right-width: 8.7rem;
}
.border-radius-87 {
  border-radius: 8.7rem;
}
.border-width-88 {
  border-width: 8.8rem;
}
.border-top-width-88 {
  border-top-width: 8.8rem;
}
.border-bottom-width-88 {
  border-bottom-width: 8.8rem;
}
.border-left-width-88 {
  border-left-width: 8.8rem;
}
.border-right-width-88 {
  border-right-width: 8.8rem;
}
.border-radius-88 {
  border-radius: 8.8rem;
}
.border-width-89 {
  border-width: 8.9rem;
}
.border-top-width-89 {
  border-top-width: 8.9rem;
}
.border-bottom-width-89 {
  border-bottom-width: 8.9rem;
}
.border-left-width-89 {
  border-left-width: 8.9rem;
}
.border-right-width-89 {
  border-right-width: 8.9rem;
}
.border-radius-89 {
  border-radius: 8.9rem;
}
.border-width-90 {
  border-width: 9rem;
}
.border-top-width-90 {
  border-top-width: 9rem;
}
.border-bottom-width-90 {
  border-bottom-width: 9rem;
}
.border-left-width-90 {
  border-left-width: 9rem;
}
.border-right-width-90 {
  border-right-width: 9rem;
}
.border-radius-90 {
  border-radius: 9rem;
}

.page {
  position: absolute;
  top: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  background: #fff;
  border-bottom: 1px solid;
  width: 100%;
}
.page button {
  border: 0px;
  cursor: pointer;
  border-right: 1px solid;
}

body.editor {
  cursor: pointer !important;
}

.sidebar {
  cursor: pointer !important;
}
.sidebar .sidebar-edition__show,
.sidebar .sidebar-edition__close {
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}
.sidebar .sidebar-edition__show:focus,
.sidebar .sidebar-edition__close:focus {
  outline: none;
}
.sidebar .sidebar-edition__show {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
}
.sidebar .sidebar-edition__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}
.sidebar .sidebar-edition__header .btn-close {
  font-size: 36px;
}
.sidebar .sidebar-edition__body {
  max-height: 80vh;
  overflow: auto;
  border-bottom: 1px solid;
}
.sidebar .sidebar-edition__body__item {
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 1px solid #000;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}
.sidebar .sidebar-edition__body__item.row {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sidebar .sidebar-edition__body__item > * {
  margin: 10px 0;
}
.sidebar .sidebar-edition__body__item input,
.sidebar .sidebar-edition__body__item select,
.sidebar .sidebar-edition__body__item textarea {
  width: 100%;
  border: 1px solid #000;
  padding: 10px 5px;
  font-size: 15px;
  color: #000;
  min-width: 200px;
  font-weight: 600;
}
.sidebar .sidebar-edition__body__item input:focus,
.sidebar .sidebar-edition__body__item select:focus,
.sidebar .sidebar-edition__body__item textarea:focus {
  outline: none;
}
.sidebar .sidebar-edition__body__item input:after,
.sidebar .sidebar-edition__body__item select:after,
.sidebar .sidebar-edition__body__item textarea:after {
  content: "test";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
}
.sidebar .sidebar-edition__body__item button {
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}
.sidebar .sidebar-edition__body__item button:focus {
  outline: none;
}

.sidebar {
  position: absolute;
  top: 50px;
  width: 400px;
  padding: 0.5rem;
  background: #fff;
  bottom: 0;
  transform: translateX(-100%);
  z-index: 101;
  transition: transform 0.3s ease-in-out;
  overflow: auto;
  border: 1px solid;
  border-top: unset;
}
.sidebar.active {
  transform: translateX(0);
}
.sidebar summary {
  border: 1px solid;
  padding: 0.4rem;
}

.debug {
  position: absolute;
  bottom: 0;
  width: fit-content;
  background: #fff;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
  word-break: break-word;
  border: 2px solid #000;
  padding: 1rem;
}
.debug pre {
  padding: 1rem;
  max-height: 500px;
  overflow-y: auto;
}
.debug:hover {
  transform: translateX(0);
}
.debug::after {
  content: "Debug";
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  background: #fff;
  transform: translateX(100%);
  color: #000;
  font-size: 1.3rem;
}

img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
}

:root {
  --img: url(https://images.unsplash.com/photo-1616166330003-8e1b2e1b2b1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
}

.container {
  padding: 0;
}

.Projects {
  padding-block-start: 190.19px;
}
.Projects .span-1 {
  grid-column: span 1;
  min-height: 360px;
}
.Projects .span-2 {
  grid-column: span 2;
  min-height: 360px;
}
.Projects .span-3 {
  grid-column: span 3;
  min-height: 360px;
}
.Projects .span-4 {
  grid-column: span 4;
  min-height: 360px;
}
.Projects .span-5 {
  grid-column: span 5;
  min-height: 360px;
}
.Projects .span-6 {
  grid-column: span 6;
  min-height: 360px;
}
.Projects .span-7 {
  grid-column: span 7;
  min-height: 360px;
}
.Projects .span-8 {
  grid-column: span 8;
  min-height: 360px;
}
.Projects .span-9 {
  grid-column: span 9;
  min-height: 360px;
}
.Projects .span-10 {
  grid-column: span 10;
  min-height: 360px;
}
.Projects .span-11 {
  grid-column: span 11;
  min-height: 360px;
}
.Projects .span-12 {
  grid-column: span 12;
  min-height: 360px;
}
.Projects .card {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  border-radius: 2rem;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  aspect-ratio: 16/6;
}
.Projects .card:hover::after {
  transform: scale(1.1);
}
.Projects .card::after {
  content: "";
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--img);
  z-index: -1;
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.Projects .card .card__edition {
  z-index: 100;
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  width: fit-content;
}
.Projects .card .btn-remove, .Projects .card .btn-edition {
  font-size: 36px;
  width: fit-content;
}
.Projects .card p {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
}
.Projects .card h1 {
  font-size: 44px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-family: "BL Melody", sans-serif;
}
.Projects .line {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 360px;
  gap: 1rem;
  margin: 0 clamp(2.188rem, 4.6vw, 4.375rem) 1rem;
}
.Projects .line > * {
  flex: 1;
  min-height: 360px;
}
.Projects .line > *[class*=w-] {
  flex: unset !important;
}
.Projects .line__edition {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  left: 0;
  height: fit-content;
  display: none;
  min-height: fit-content;
  z-index: 300;
}
.Projects .line__edition button {
  width: fit-content;
  font-size: 36px;
}

.menu--bottom {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  text-transform: uppercase;
}
.menu--bottom ul {
  position: initial;
  overflow: initial;
  width: initial;
  height: initial;
  background-color: #fff;
}
.menu--bottom ul li {
  position: relative;
  z-index: 100;
  color: #000 !important;
}
.menu--bottom ul li:hover, .menu--bottom ul li.hovered {
  color: #fff !important;
}
.menu--bottom span {
  z-index: 1 !important;
}
.menu--bottom span::after {
  background: #000 !important;
}

@media screen and (min-width: 834px) {
  .Projects .line {
    flex-direction: row;
  }
}

#wpbody-content {
    position: relative;
    min-height: 95vh;
    overflow: hidden;
    margin-top: 18px;
}
.subAdd {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;
  margin-bottom: 1rem;
}
.subAdd.active {
  visibility: visible;
  height: fit-content;
}

`;

export default GlobalStyle;