# Read from the file file.txt and output all valid phone numbers to stdout.

while read line
do
    r1="$(echo $line | egrep '^[0-9]{3}-[0-9]{3}-[0-9]{4}$')"
    r2="$(echo $line | egrep '^(\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$')"
    if [[ $r1 ]]
    then
        echo $r1
    fi

    if [[ $r2 ]]
    then
        echo $r2
    fi
done < file.txt