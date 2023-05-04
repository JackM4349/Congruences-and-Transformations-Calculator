import os

filename = "SB-64"

with open(f"{filename}.html", "w") as f:
    with open("SimpleBuild.html", "r") as sb:
        f.write(sb.read())
    with open("HelpandDiagram.html", "r") as hd:
        f.write(hd.read())

print(f"{filename}.html successfully created!")
