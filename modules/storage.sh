#!/bin/bash

source .env.local

JSON_DATA=$(jq 'if type=="array" then .[-1] else . end' ../articles.json)

if [ $? -eq 0 ]; then
    curl -X POST "$SUPABASE_URL/rest/v1/articles" \
    -H "apikey: $SUPABASE_KEY" \
    -H "Authorization: Bearer $SUPABASE_KEY" \
    -H "Content-Type: application/json" \
    -H "Prefer: return=minimal" \
    -d "$JSON_DATA"
else
    echo "Failed to read JSON data from 'articles.json'"
fi