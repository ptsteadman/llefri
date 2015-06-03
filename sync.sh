aws s3 sync ./ s3://llefri.com --acl public-read  --exclude "*.swp" --exclude ".git/*"
