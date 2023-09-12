from setuptools import setup, find_packages
import codecs
import os

here = os.path.abspath(os.path.dirname(__file__))

with codecs.open(os.path.join(here, "README.md"), encoding="utf-8") as fh:
    long_description = "\n" + fh.read()

VERSION = '1.0.4'
DESCRIPTION = 'Library for mapping Chinese character to Hong Kong Government Cantonese Romanisation, Pingyam (Yale or LSHK)'

# Setting up
setup(
    name="cantonese-romanisation",
    version=VERSION,
    author="Chun Law (chunalw)",
    author_email="<chunlaw@rocketmail.com.com>",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",
    long_description=long_description,
    packages=find_packages(),
    install_requires=[],
    include_package_data=True,
    keywords=['pinyin', 'cantonese', 'pingyam', 'hong kong government cantonese romanisation', 'romanisation', 'romanization'],
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ]
)