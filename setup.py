import os,glob,shutil

# change extension for file
for file in glob.glob("./pages/**/*.js"):
    f_name,ext = os.path.splitext(file)
    os.rename(file, f_name + '.tsx')
    
src_dir="src"
pages_dir="pages"

# create src dir
os.makedirs(src_dir,exist_ok=True)

# move pages to src
if os.path.isdir(pages_dir):
    shutil.move(pages_dir, src_dir)